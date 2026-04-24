require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5015;

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map(s => s.trim())
  : true;

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

// Auto-seed on startup if DB is empty
try {
  const db = require('./db/init');
  const count = db.prepare('SELECT COUNT(*) as n FROM services').get().n;
  if (count === 0) {
    console.log('🌱 Empty DB detected — running seed...');
    require('./db/seed');
  }
} catch (e) {
  console.error('Seed check failed:', e.message);
}

app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/services', require('./routes/services'));
app.use('/api/testimonials', require('./routes/testimonials'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`✅ TantyMedia backend running on http://localhost:${PORT}`);
});
