const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`SERVER LISTENING ON PORT ${PORT}...\n`);
});
