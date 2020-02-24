const express = require('express');

const router = express.Router();

// POST /api/neighborhoods/
router.post('', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}`);
});

// GET /api/neighborhoods/:id
router.get('/:id', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`);
});

// PATCH /api/neighborhoods/:id
router.patch('/:id', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`);
});

// DELETE /api/neighborhoods/:id
router.delete('/:id', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`);
});

// GET /api/neighborhoods/:id/plot
router.get('/:id/plot', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`); 
});

// POST /api/neighborhoods/:id/plot
router.post('/:id/plot', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}, ${req.method}, ${JSON.stringify(req.params)}`); 
});

module.exports = router;
