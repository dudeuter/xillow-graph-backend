const express = require('express');
const { neighborhoods } = require('../../database/models/index');

const router = express.Router();

// POST /api/neighborhoods/
router.post('', (req, res) => {
  res.end(`endpoint: ${req.baseUrl}`);
});

// GET /api/neighborhoods/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  neighborhoods
    .getById(id)
    .then((data) => {
      res.status(200);
      res.send(JSON.stringify(data));
    })
    .catch((err) => {
      res.status(500);
      res.send(JSON.stringify(err));
    })
    .finally(() => {
      res.end();
    });
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
