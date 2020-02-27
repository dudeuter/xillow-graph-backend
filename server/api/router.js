const express = require('express');
const { graph } = require('../../database/models/index');

const router = express.Router();

router.get('/graph/:houseID', (req, res) => {
  const id = parseInt(req.params.houseID, 10);
  graph
    .getById(id)
    .then((data) => {
      res.status(200);
      res.send(JSON.stringify(data));
    })
    .catch((err) => {
      res.status(500);
      res.send(JSON.stringify(err));
    })
    .finally(
      () => {
        res.end();
      },
    );
});

router.use('/houses', require('./houses'));
router.use('/neighborhoods', require('./neighborhoods'));
router.use('/cities', require('./cities'));

module.exports = router;
