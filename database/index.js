const { Client } = require('pg');
const { user, host } = require('./credentials');

const client = new Client({
  user,
  host,
  database: 'graph',
});

client.connect();

module.exports = {
  client,
};
