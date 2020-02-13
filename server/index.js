const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res, next) => {
  res.end('Hello World');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`SERVER LISTENING ON PORT ${PORT}...\n`);
});
