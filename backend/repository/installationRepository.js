const db = require('../data/db');

// ➕ Ajouter une installation
const create = async ({ titre, description, image_url, type }) => {
  const sql = `
    INSERT INTO installations (titre, description, image_url, type)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await db.promise().execute(sql, [titre, description, image_url, type]);
  return result.insertId;
};

// 📋 Lister toutes les installations
const getAll = async () => {
  const sql = `SELECT * FROM installations ORDER BY date_ajout DESC`;
  const [rows] = await db.promise().execute(sql);
  return rows;
};

// 🆔 Obtenir une installation par ID
const getById = async (id) => {
  const sql = `SELECT * FROM installations WHERE id = ?`;
  const [rows] = await db.promise().execute(sql, [id]);
  return rows[0];
};

// ✏️ Modifier une installation
const update = async (id, { titre, description, image_url, type }) => {
  const sql = `
    UPDATE installations
    SET titre = ?, description = ?, image_url = ?, type = ?
    WHERE id = ?
  `;
  const [result] = await db.promise().execute(sql, [titre, description, image_url, type, id]);
  return result.affectedRows > 0;
};

// ❌ Supprimer une installation
const remove = async (id) => {
  const sql = `DELETE FROM installations WHERE id = ?`;
  const [result] = await db.promise().execute(sql, [id]);
  return result.affectedRows > 0;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
};
