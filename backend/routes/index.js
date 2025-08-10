const express = require('express');
const router = express.Router();

// Importer toutes les sous-routes
const authRoutes = require('./authRoutes');
const reservationRoutes = require('./reservationRoutes');
const installationRoutes = require('./installationRoutes');
const annonceRoutes = require('./annonceRoutes');
const messageRoutes = require('./messageRoutes');
const horaireRoutes = require('./horaireRoutes');
const userRoutes = require('./userRoutes');

// Utiliser les sous-routes
router.use('/auth', authRoutes);
router.use('/reservations', reservationRoutes);
router.use('/installations', installationRoutes);
router.use('/annonces', annonceRoutes);
router.use('/messages', messageRoutes);
router.use('/horaires', horaireRoutes);
router.use('/users', userRoutes);

module.exports = router;
