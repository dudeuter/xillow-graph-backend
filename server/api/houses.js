const express = require('express');
const { homes } = require('../../database/models/index');

const router = express.Router();

// POST /api/houses/
router.post('', (req, res) => {
  homes
    .insert({})
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

// GET /api/houses/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  homes
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

// PATCH /api/houses/:id
router.patch('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  homes
    .updateById(id)
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

// DELETE /api/houses/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  homes
    .deleteById(id)
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

// GET /api/houses/:id/plot
router.get('/:id/plot', (req, res) => {
  const id = parseInt(req.params.id, 10);
  homes
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

// POST /api/houses/:id/plot
router.post('/:id/plot', (req, res) => {
  const id = parseInt(req.params.id, 10);
  homes
    .insertPlotById(id)
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

module.exports = router;
