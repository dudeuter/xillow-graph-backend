const express = require('express');
const { cities } = require('../../database/models/index');

const router = express.Router();

router.post('', (req, res) => {
  cities
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

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  cities
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

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  cities
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

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  cities
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

router.get('/:id/plot', (req, res) => {
  const id = parseInt(req.params.id, 10);
  cities
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

router.post('/:id/plot', (req, res) => {
  const id = parseInt(req.params.id, 10);
  cities
    .insertPlotById(id, {})
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
