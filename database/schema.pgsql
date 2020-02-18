DROP DATABASE IF EXISTS graph;
CREATE DATABASE graph;

\connect graph;

CREATE SCHEMA service;

CREATE TABLE service.cities (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE service.neighborhoods (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  city_id INTEGER NOT NULL REFERENCES service.cities(id)
);

CREATE TABLE service.homes (
  id SERIAL NOT NULL PRIMARY KEY,
  address VARCHAR(255) NOT NULL,
  neighborhood_id INTEGER NOT NULL REFERENCES service.neighborhoods(id),
  city_id INTEGER NOT NULL REFERENCES service.cities(id)
);

CREATE TABLE service.cities_plot (
  city_id INTEGER NOT NULL REFERENCES service.cities(id),
  estimate MONEY NOT NULL,
  date DATE NOT NULL
);

CREATE TABLE service.neighborhoods_plot (
  neighborhood_id INTEGER NOT NULL REFERENCES service.neighborhoods(id),
  estimate MONEY NOT NULL,
  date DATE NOT NULL
);

CREATE TABLE service.homes_plot (
  home_id INTEGER NOT NULL REFERENCES service.homes(id),
  estimate MONEY NOT NULL,
  date DATE NOT NULL,
  listed BOOLEAN DEFAULT false,
  sold BOOLEAN DEFAULT false
);
