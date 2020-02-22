/* eslint-disable no-console */
const { Pool } = require('pg');
const { user } = require('./credentials');

const maxConnections = 20;
// eslint-disable-next-line no-unused-vars
let connections = 0;

const pool = new Pool({
  host: 'localhost',
  user,
  max: maxConnections,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error acquiring client', err.stack);
    return;
  }

  connections += 1;
  client.query('SELECT NOW()', (queryError, result) => {
    release();
    connections -= 1;

    if (queryError) {
      console.error('Error executing query', queryError.stack);
      return;
    }
    console.log(result);
  });
});

// ugh

for (let i = 0; i < maxConnections; i += 1) {
  //
}

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error acquiring client', err.stack);
    return;
  }

  connections += 1;
  client.query('SELECT NOW()', (queryError, result) => {
    release();
    connections -= 1;

    if (queryError) {
      console.error('Error executing query', queryError.stack);
      return;
    }
    console.log(result);
  });
});
