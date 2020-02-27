/* eslint-disable no-unused-vars */
const { client } = require('../../database/index');

module.exports = {
  insert(neighborhood) {
    return Promise.reject(new Error('model method not implemented yet'));
  },
  getById(id) {
    return (
      client
        .query('SELECT * FROM service.neighborhoods WHERE service.neighborhoods.id = $1;', [id])
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
        .query('SELECT * FROM service.neighborhoods_plot WHERE neighborhood_id = $1;', [id])
        .then((data) => data.rows)
    );
  },
};
