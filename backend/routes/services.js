const express = require('express');
const router = express.Router();
const db = require('../db/init');

const parseGallery = r => ({ ...r, gallery: r.gallery ? JSON.parse(r.gallery) : null });

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM services ORDER BY sort_order ASC').all();
  res.json(rows.map(parseGallery));
});

router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM services WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Service not found' });
  res.json(parseGallery(row));
});

module.exports = router;
