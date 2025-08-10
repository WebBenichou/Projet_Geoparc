const db = require('../data/db');

// ➕ Créer une réservation
const createReservation = async (userId, date_reservation, nombre_personnes, horaire_id) => {
  const sql = `
    INSERT INTO reservations (user_id, date_reservation, nombre_personnes, horaire_id)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await db.promise().execute(sql, [userId, date_reservation, nombre_personnes, horaire_id]);
  return result.insertId;
};

// 📋 Obtenir les réservations d’un utilisateur
const getReservationsByUser = async (userId) => {
  const sql = `
    SELECT r.*, h.date AS horaire_date, h.heure
    FROM reservations r
    JOIN horaires h ON r.horaire_id = h.id
    WHERE r.user_id = ?
    ORDER BY r.date_creation DESC
  `;
  const [rows] = await db.promise().execute(sql, [userId]);
  return rows;
};

// 🧑‍💼 Admin : toutes les réservations
const getAllReservations = async () => {
  const sql = `
    SELECT r.*, u.nom, u.email, h.date AS horaire_date, h.heure
    FROM reservations r
    JOIN users u ON r.user_id = u.id
    JOIN horaires h ON r.horaire_id = h.id
    ORDER BY r.date_creation DESC
  `;
  const [rows] = await db.promise().execute(sql);
  return rows;
};

module.exports = {
  createReservation,
  getReservationsByUser,
  getAllReservations
};
