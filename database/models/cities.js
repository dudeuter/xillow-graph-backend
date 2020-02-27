/* eslint-disable no-unused-vars */
const { client } = require('../../database/index');

module.exports = {
  insert(city) {
    return Promise.reject(new Error('model method not implemented yet'));
  },
  getById(id) {
    return (
      client
        .query('SELECT * FROM service.cities WHERE id = $1 LIMIT 1;', [id])
        .then((data) => data.rows[0])
    );
  },
  updateById(id) {
    return Promise.reject(new Error('model method not implemented yet'));
  },
  deleteById(id) {
    return Promise.reject(new Error('model method not implemented yet'));
  },
  insertPlotById(id) {
    return Promise.reject(new Error('model method not implemented yet'));
  },
  getPlotsById(id) {
    return (
      client
        .query('SELECT * FROM service.cities_plot WHERE city_id = $1;', [id])
        .then((data) => data.rows)
    );
  },
};
