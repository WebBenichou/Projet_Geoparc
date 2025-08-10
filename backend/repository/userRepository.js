const db = require('../data/db');

// 🔍 Trouver un utilisateur par email
const findByEmail = async (email) => {
  const sql = `SELECT * FROM users WHERE email = ?`;
  const [rows] = await db.promise().execute(sql, [email]);
  return rows[0];
};

// 🔍 Trouver un utilisateur par ID
const findById = async (id) => {
  const sql = `SELECT id, nom, email, role, date_creation FROM users WHERE id = ?`;
  const [rows] = await db.promise().execute(sql, [id]);
  return rows[0];
};

// ➕ Créer un utilisateur
const createUser = async ({ nom, email, hashedPassword }) => {
  const sql = `
    INSERT INTO users (nom, email, mot_de_passe)
    VALUES (?, ?, ?)
  `;
  const [result] = await db.promise().execute(sql, [nom, email, hashedPassword]);
  return result.insertId;
};

// 📋 Lister tous les utilisateurs (admin)
const getAll = async () => {
  const sql = `SELECT id, nom, email, role, date_creation FROM users ORDER BY date_creation DESC`;
  const [rows] = await db.promise().execute(sql);
  return rows;
};

// ❌ Supprimer un utilisateur
const remove = async (id) => {
  const sql = `DELETE FROM users WHERE id = ?`;
  const [result] = await db.promise().execute(sql, [id]);
  return result.affectedRows > 0;
};

module.exports = {
  findByEmail,
  findById,
  createUser,
  getAll,
  remove
};
