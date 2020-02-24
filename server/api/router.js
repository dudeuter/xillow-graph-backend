const express = require('express');

const router = express.Router();

router.get('/graph/:houseID', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}`);
});

router.use('/houses', require('./houses'));
router.use('/neighborhoods', require('./neighborhoods'));
router.use('/cities', require('./cities'));

module.exports = router;
