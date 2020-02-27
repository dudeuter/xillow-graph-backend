const express = require('express');
const { neighborhoods } = require('../../database/models/index');

const router = express.Router();

// POST /api/neighborhoods/
router.post('', (req, res) => {
  neighborhoods
    .insert()
    .then(() => {
      res.status(200);
    })
    .catch(() => {
      res.status(500);
    })
    .finally(() => {
      res.end();
    });
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
    .catch(() => {
      res.status(500);
    })
    .finally(() => {
      res.end();
    });
});

// PATCH /api/neighborhoods/:id
router.patch('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  neighborhoods
    .updateById(id)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch(() => {
      res.status(500);
    })
    .finally(() => {
      res.end();
    });
});

// DELETE /api/neighborhoods/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  neighborhoods
    .deleteById(id)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch(() => {
      res.status(500);
    })
    .finally(() => {
      res.end();
    });
});

// GET /api/neighborhoods/:id/plot
router.get('/:id/plot', (req, res) => {
  const id = parseInt(req.params.id, 10);
  neighborhoods
    .getPlotsById(id)
    .then((data) => {
      res.status(200);
      res.send(JSON.stringify(data));
    })
    .catch(() => {
      res.status(500);
    })
    .finally(() => {
      res.end();
    });
});

// POST /api/neighborhoods/:id/plot
router.post('/:id/plot', (req, res) => {
  const id = parseInt(req.params.id, 10);
  neighborhoods
    .insertPlotById(id)
    .then((data) => {
      res.status(200);
      res.send(JSON.stringify(data));
    })
    .catch(() => {
      res.status(500);
    })
    .finally(() => {
      res.end();
    });
});

module.exports = router;
