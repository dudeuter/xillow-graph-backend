const express = require('express');

const router = express.Router();

router.get('', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}`);
});

module.exports = router;
