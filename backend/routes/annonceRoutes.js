const express = require('express');
const router = express.Router();
const controller = require('../controllers/annonceController');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

// 📋 Tous les utilisateurs peuvent voir les annonces
router.get('/', controller.getAll);

// ➕ Ajouter une annonce (admin)
router.post('/', verifyToken, isAdmin, controller.create);

// ❌ Supprimer une annonce (admin)
router.delete('/:id', verifyToken, isAdmin, controller.remove);

module.exports = router;
