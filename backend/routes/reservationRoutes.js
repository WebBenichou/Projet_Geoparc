const express = require('express');
const router = express.Router();
const controller = require('../controllers/reservationController');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

// 🔐 Réserver
router.post('/', verifyToken, controller.create);

// 👤 Voir mes réservations
router.get('/me', verifyToken, controller.getMyReservations);

// 🧑‍💼 Voir toutes les réservations (admin)
router.get('/', verifyToken, isAdmin, controller.getAll);

module.exports = router;
