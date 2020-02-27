/* eslint-disable no-unused-vars */
const { client } = require('../../database/index');

module.exports = {
  insert(home) {
    // TODO
    return Promise.reject(new Error('model method not implemented yet'));
  },
  getById(id) {
    // TODO
    return client.query('SELECT * FROM service.homes WHERE id = ?;', [id]);
  },
  updateById(id) {
    // TODO
    return Promise.reject(new Error('model method not implemented yet'));
  },
  deleteById(id) {
    // TODO
    return Promise.reject(new Error('model method not implemented yet'));
  },
  insertPlotById(id) {
    // TODO
    return Promise.reject(new Error('model method not implemented yet'));
  },
  getPlotsById(id) {
    // TODO
    return Promise.reject(new Error('model method not implemented yet'));
  },
};
