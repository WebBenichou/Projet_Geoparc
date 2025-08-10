const db = require('../data/db');

// 📋 Tous les horaires
const getAllHoraires = async () => {
  const sql = `SELECT * FROM horaires ORDER BY date ASC, heure ASC`;
  const [rows] = await db.promise().execute(sql);
  return rows;
};

// ➕ Ajouter un horaire
const addHoraire = async ({ date, heure, capacite_max }) => {
  const sql = `INSERT INTO horaires (date, heure, capacite_max) VALUES (?, ?, ?)`;
  const [result] = await db.promise().execute(sql, [date, heure, capacite_max]);
  return result.insertId;
};

// ❌ Supprimer un horaire
const deleteHoraire = async (id) => {
  const sql = `DELETE FROM horaires WHERE id = ?`;
  const [result] = await db.promise().execute(sql, [id]);
  return result.affectedRows > 0;
};

module.exports = {
  getAllHoraires,
  addHoraire,
  deleteHoraire
};
