const { client } = require('../../database/index');

const query = `
SELECT
  homes.id,
  address,
  homes.estimate,
  array(
    SELECT estimate
    FROM service.homes_plot
    WHERE service.homes.id = service.homes_plot.home_id
  ) AS home_estimates,
  array(
    SELECT date
    FROM service.homes_plot
    WHERE service.homes.id = service.homes_plot.home_id
  ) AS home_dates,
  array(
    SELECT listed
    FROM service.homes_plot
    WHERE service.homes.id = service.homes_plot.home_id
  ) AS homes_listed,
  array(
    SELECT sold
    FROM service.homes_plot
    WHERE service.homes.id = service.homes_plot.home_id
  ) AS homes_sold,
  neighborhoods.name AS neighborhood,
  array(
    SELECT estimate
    FROM service.neighborhoods_plot
    WHERE service.neighborhoods.id = service.neighborhoods_plot.neighborhood_id
  ) AS neighborhood_estimates,
  array(
    SELECT date
    FROM service.neighborhoods_plot
    WHERE service.neighborhoods.id = service.neighborhoods_plot.neighborhood_id
  ) AS neighborhood_dates,
  cities.name AS city,
  array(
    SELECT estimate
    FROM service.cities_plot
    WHERE service.cities.id = service.cities_plot.city_id
  ) AS city_estimates,
  array(
    SELECT date
    FROM service.cities_plot
    WHERE service.cities.id = service.cities_plot.city_id
  ) AS city_dates
FROM service.homes
  JOIN service.neighborhoods
    ON service.homes.neighborhood_id = service.neighborhoods.id
  JOIN service.cities
    ON service.homes.city_id = service.cities.id
WHERE service.homes.id = $1;
`;

module.exports = {
  getById(id) {
    return (
      client
        .query(query, [id])
        .then((data) => {
          const result = data.rows[0];
          return {
            address: result.address,
            neighborhood: result.neighborhood,
            city: result.city,
            estimate: result.estimate,
            housePlot: result.home_dates.map((date, i) => ({
              date,
              price: result.home_estimates[i],
              listed: result.homes_listed[i],
              sold: result.homes_sold[i],
            })),
            neighborhoodPlot: result.neighborhood_dates.map((date, i) => ({
              date,
              price: result.neighborhood_estimates[i],
            })),
            cityPlot: result.city_dates.map((date, i) => ({
              date,
              price: result.city_estimates[i],
            })),
          };
        })
    );
  },
};
