const { Pool } = require('pg');
const { user, host } = require('./credentials');

const pool = new Pool({
  host,
  database: 'graph',
  user,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = {
  pool,
};
