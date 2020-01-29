const express = require('express');
const app = express();
const port = 3003;
const db = require('../database/db.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/seed', (req, res) => {
  db.save(() => {
    db.retrieve((docs) => {
      res.json(docs);
    });
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))