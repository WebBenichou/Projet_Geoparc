const db = require('../data/db');

// ➕ Créer une annonce
const createAnnonce = async ({ titre, contenu, image_url, admin_id }) => {
  const sql = `
    INSERT INTO annonces (titre, contenu, image_url, admin_id)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await db.promise().execute(sql, [titre, contenu, image_url, admin_id]);
  return result.insertId;
};

// 📋 Récupérer toutes les annonces
const getAllAnnonces = async () => {
  const sql = `SELECT a.*, u.nom AS auteur FROM annonces a JOIN users u ON a.admin_id = u.id ORDER BY date_publication DESC`;
  const [rows] = await db.promise().execute(sql);
  return rows;
};

// ❌ Supprimer une annonce
const deleteAnnonce = async (id) => {
  const sql = `DELETE FROM annonces WHERE id = ?`;
  const [result] = await db.promise().execute(sql, [id]);
  return result.affectedRows > 0;
};

module.exports = {
  createAnnonce,
  getAllAnnonces,
  deleteAnnonce
};
