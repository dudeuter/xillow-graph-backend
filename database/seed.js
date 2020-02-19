const { Pool } = require('pg');
const { user } = require('./credentials');

const pool = new Pool({
  host: 'localhost',
  user,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
