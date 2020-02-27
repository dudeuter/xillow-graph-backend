/* eslint-disable no-unused-vars */
const { client } = require('../../database/index');

module.exports = {
  insert(home) {
    const {
      address, estimate, neighborhood, city,
    } = home;
    return client.query(
      `INSERT INTO
          service.homes (address, estimate, neighborhood_id, city_id)
          VALUES(?, ?, ?, ?);`,
      [address, estimate, neighborhood, city],
    );
  },
  getById(id) {
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
    return (
      client
        .query('SELECT * FROM service.homes_plot WHERE home_id = $1;', [id])
        .then((data) => data.rows)
    );
  },
};
