const db = require('../data/db');

// 🔍 Trouver un utilisateur par email
const findByEmail = async (email) => {
  const sql = `SELECT * FROM users WHERE email = ?`;
  const [rows] = await db.promise().execute(sql, [email]);
  return rows[0];
};

// 🧾 Créer un utilisateur (avec le rôle)
const register = async (nom, email, hashedPassword, role = 'visiteur') => {
  const sql = `INSERT INTO users (nom, email, mot_de_passe, role) VALUES (?, ?, ?, ?)`;
  const [result] = await db.promise().execute(sql, [nom, email, hashedPassword, role]);
  return result.insertId;
};

module.exports = {
  findByEmail,
  register
};
