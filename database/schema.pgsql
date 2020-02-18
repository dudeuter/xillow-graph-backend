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
  city INTEGER NOT NULL REFERENCES service.cities(id)
);

CREATE TABLE service.homes (
  id SERIAL NOT NULL PRIMARY KEY,
  address VARCHAR(255) NOT NULL,
  neighborhood INTEGER NOT NULL REFERENCES service.neighborhoods(id),
  city INTEGER NOT NULL REFERENCES service.cities(id)
);

CREATE TABLE service.citiesPlot (
  city INTEGER NOT NULL REFERENCES service.cities(id),
  estimate MONEY NOT NULL,
  date DATE NOT NULL
);

CREATE TABLE service.neighborhoodsPlot (
  neighborhood INTEGER NOT NULL REFERENCES service.neighborhoods(id),
  estimate MONEY NOT NULL,
  date DATE NOT NULL
);

CREATE TABLE service.homesPlot (
  home INTEGER NOT NULL REFERENCES service.homes(id),
  estimate MONEY NOT NULL,
  date DATE NOT NULL,
  listed BOOLEAN DEFAULT false,
  sold BOOLEAN DEFAULT false
);
