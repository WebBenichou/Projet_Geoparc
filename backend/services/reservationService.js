const reservationRepo = require('../repository/reservationRepository');

// ➕ Créer une réservation
const createReservation = async (userId, { date_reservation, nombre_personnes, horaire_id }) => {
  if (!date_reservation || !nombre_personnes || !horaire_id) {
    throw { status: 400, message: "Tous les champs sont obligatoires." };
  }

  const date = new Date(date_reservation);
  if (date < new Date()) {
    throw { status: 400, message: "Impossible de réserver pour une date passée." };
  }

  const reservationId = await reservationRepo.createReservation(
    userId,
    date_reservation,
    nombre_personnes,
    horaire_id
  );

  return { id: reservationId };
};

// 👤 Voir mes réservations
const getUserReservations = async (userId) => {
  return await reservationRepo.getReservationsByUser(userId);
};

// 🧑‍💼 Admin : toutes les réservations
const getAllReservations = async () => {
  return await reservationRepo.getAllReservations();
};

module.exports = {
  createReservation,
  getUserReservations,
  getAllReservations
};
