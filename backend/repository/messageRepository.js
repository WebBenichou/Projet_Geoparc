const db = require('../data/db');

// ➕ Ajouter un message
const createMessage = async ({ user_id, sujet, message }) => {
  const sql = `INSERT INTO messages (user_id, sujet, message) VALUES (?, ?, ?)`;
  const [result] = await db.promise().execute(sql, [user_id, sujet, message]);
  return result.insertId;
};

// 📋 Obtenir tous les messages (admin)
const getAllMessages = async () => {
  const sql = `
    SELECT m.*, u.nom AS auteur
    FROM messages m
    JOIN users u ON m.user_id = u.id
    ORDER BY date_envoi DESC
  `;
  const [rows] = await db.promise().execute(sql);
  return rows;
};

// ✅ Marquer un message comme lu
const markAsRead = async (id) => {
  const sql = `UPDATE messages SET lu = TRUE WHERE id = ?`;
  const [result] = await db.promise().execute(sql, [id]);
  return result.affectedRows > 0;
};

// ❌ Supprimer un message
const deleteMessage = async (id) => {
  const sql = `DELETE FROM messages WHERE id = ?`;
  const [result] = await db.promise().execute(sql, [id]);
  return result.affectedRows > 0;
};

module.exports = {
  createMessage,
  getAllMessages,
  markAsRead,
  deleteMessage
};
