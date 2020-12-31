/* eslint-disable camelcase */
const faker = require('faker');
const { Client } = require('pg');
const { user } = require('./credentials');

const CITIES_TOTAL = 10000000;
const CITIES_LEN = 50;
const NEIGHBORHOODS_PER_CITY = 10;
const PLOTS_PER_CITY = 100;
const PLOTS_PER_NEIGHBORHOOD = 100;

const cities = [];
for (let i = 0; i < CITIES_LEN; i += 1) {
  cities.push(faker.address.city());
}

const cityPlotIds = [];
const cityPlotEstimates = [];
const cityPlotDates = [];
cities.forEach((c, index) => {
  for (let i = 0; i < PLOTS_PER_CITY; i += 1) {
    cityPlotIds.push(index + 1);
    cityPlotEstimates.push(Math.floor(Math.random() * 50) * 100000);
    cityPlotDates.push(new Date(faker.date.past()));
  }
});

const neighborhoods = [];
const neighborhoodCityIds = [];
cities.forEach((c, index) => {
  for (let i = 0; i < NEIGHBORHOODS_PER_CITY; i += 1) {
    neighborhoods.push(faker.address.streetName());
    neighborhoodCityIds.push(index + 1);
  }
});

const neighborhoodPlotIds = [];
const neighborhoodPlotEstimates = [];
const neighborhoodPlotDates = [];
neighborhoods.forEach((c, index) => {
  for (let i = 0; i < PLOTS_PER_NEIGHBORHOOD; i += 1) {
    neighborhoodPlotIds.push(index + 1);
    neighborhoodPlotEstimates.push(1000000 + Math.floor(Math.random() * 50) * 100000);
    neighborhoodPlotDates.push(new Date(faker.date.past()));
  }
});

/**
 * SET UP TABLES
 */
const client = new Client({
  host: 'localhost',
  database: 'graph',
  user,
});
client.connect()
  .then(() => client.query(
    'INSERT INTO service.cities (name) SELECT * FROM UNNEST ($1::text[])',
    [
      cities,
    ],
  ))
  .then(() => client.query(
    'INSERT INTO service.neighborhoods (name, city_id) SELECT * FROM UNNEST ($1::text[], $2::int[])',
    [
      neighborhoods,
      neighborhoodCityIds,
    ],
  ))
  .then(() => client.query(
    'INSERT INTO service.cities_plot (city_id, estimate, date) SELECT * FROM UNNEST ($1::int[], $2::money[], $3::date[])',
    [
      cityPlotIds,
      cityPlotEstimates,
      cityPlotDates,
    ],
  ))
  .then(() => client.query(
    'INSERT INTO service.neighborhoods_plot (neighborhood_id, estimate, date) SELECT * FROM UNNEST ($1::int[], $2::money[], $3::date[])',
    [
      neighborhoodPlotIds,
      neighborhoodPlotEstimates,
      neighborhoodPlotDates,
    ],
  ))
  .finally(() => client.end());
// DONE SETTING UP TABLES

class DataProducer {
  constructor() {
    this.address = [];
    this.estimate = [];
    this.neighborhood_id = [];
    this.city_id = [];

    this.generated = 0;
    this.consumed = 0;
    this.done = false;
  }

  getData() {
    const obj = {
      address: this.address,
      estimate: this.estimate,
      neighborhood_id: this.neighborhood_id,
      city_id: this.city_id,
    };

    this.consumed += this.address.length;

    this.address = [];
    this.estimate = [];
    this.neighborhood_id = [];
    this.city_id = [];

    return obj;
  }

  addRow() {
    this.address.push(faker.address.streetAddress());
    this.estimate.push(1000000 + Math.floor(Math.random() * 50) * 100000);

    const neighborhood = Math.floor(Math.random() * neighborhoodCityIds.length);
    this.neighborhood_id.push(neighborhood + 1);
    this.city_id.push(neighborhoodCityIds[neighborhood]);

    this.generated += 1;
  }
}

const producer = new DataProducer();

const anotherClient = new Client({
  host: 'localhost',
  database: 'graph',
  user,
});

const cursor = anotherClient.connect();

while (producer.generated !== CITIES_TOTAL) {
  for (let i = 0; i < 10000; i += 1) {
    producer.addRow();
  }

  const {
    address, estimate, neighborhood_id, city_id,
  } = producer.getData();

  cursor.then(anotherClient.query(
    'INSERT INTO service.homes (address, estimate, neighborhood_id, city_id) SELECT * FROM UNNEST ($1::text[], $2::money[], $3::int[], $4::int[])',
    [
      address,
      estimate,
      neighborhood_id,
      city_id,
    ],
  ));
}
