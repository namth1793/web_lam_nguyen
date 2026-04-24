const express = require('express');
const router = express.Router();
const db = require('../db/init');

router.post('/', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }
  const stmt = db.prepare(
    'INSERT INTO contacts (name, email, phone, service, message) VALUES (?, ?, ?, ?, ?)'
  );
  const result = stmt.run(name, email, phone || null, service || null, message);
  res.status(201).json({ success: true, id: result.lastInsertRowid });
});

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC').all();
  res.json(rows);
});

module.exports = router;
