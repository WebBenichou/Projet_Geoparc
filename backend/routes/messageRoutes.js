const express = require('express');
const router = express.Router();
const controller = require('../controllers/messageController');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

// 📨 Envoyer un message (visiteur connecté)
router.post('/', verifyToken, controller.sendMessage);

// 📋 Voir tous les messages (admin)
router.get('/', verifyToken, isAdmin, controller.getAll);

// ✅ Marquer comme lu (admin)
router.patch('/:id/read', verifyToken, isAdmin, controller.markAsRead);

// ❌ Supprimer un message (admin)
router.delete('/:id', verifyToken, isAdmin, controller.delete);

module.exports = router;
