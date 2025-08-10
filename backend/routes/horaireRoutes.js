const express = require('express');
const router = express.Router();
const controller = require('../controllers/horaireController');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

// 📋 Voir tous les horaires (visiteur ou admin)
router.get('/', controller.getAll);

// ➕ Ajouter un horaire (admin uniquement)
router.post('/', verifyToken, isAdmin, controller.create);

// ❌ Supprimer un horaire (admin uniquement)
router.delete('/:id', verifyToken, isAdmin, controller.delete);

module.exports = router;
