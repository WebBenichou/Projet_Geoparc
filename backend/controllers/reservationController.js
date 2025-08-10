const reservationService = require('../services/reservationService');

// ➕ POST /api/reservations
exports.create = async (req, res) => {
  try {
    const reservation = await reservationService.createReservation(req.user.id, req.body);
    res.status(201).json({ message: "Réservation enregistrée", reservation });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erreur serveur" });
  }
};

// 👤 GET /api/reservations/me
exports.getMyReservations = async (req, res) => {
  try {
    const reservations = await reservationService.getUserReservations(req.user.id);
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des réservations" });
  }
};

// 🧑‍💼 GET /api/reservations (admin)
exports.getAll = async (req, res) => {
  try {
    const reservations = await reservationService.getAllReservations();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des réservations" });
  }
};
