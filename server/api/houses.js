const express = require('express');

const router = express.Router();

// POST /api/houses/
router.post('', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}`);
});

// GET /api/houses/:id
router.get('/:id', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`);
});

// PATCH /api/houses/:id
router.patch('/:id', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`);
});

// DELETE /api/houses/:id
router.delete('/:id', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`);
});

// GET /api/houses/:id/plot
router.get('/:id/plot', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`);
});

// POST /api/houses/:id/plot
router.post('/:id/plot', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`);
});

module.exports = router;
