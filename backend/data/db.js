// ./data/db.js
const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
});

db.connect()
  .then(() => console.log("✅ Connecté à PostgreSQL"))
  .catch(err => {
    console.error("❌ Échec de connexion à PostgreSQL :", err.message);
    process.exit(1);
  });

module.exports = db;
