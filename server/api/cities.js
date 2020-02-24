const express = require('express');

const router = express.Router();

router.post('', (req, res) => {
  res.end(`endpoint: ${req.method} ${req.baseUrl}`);
});

router.get('/:id', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`);
});

router.put('/:id', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`);
});

router.delete('/:id', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`);
});

router.get('/:id/plot', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`);
});

router.post('/:id/plot', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`);
});

module.exports = router;
