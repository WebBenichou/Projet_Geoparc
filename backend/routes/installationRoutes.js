const express = require('express');
const router = express.Router();
const controller = require('../controllers/installationController');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

// 📋 Accessible à tous
router.get('/', controller.getAll);
router.get('/:id', controller.getById);

// ➕ ✏️ ❌ Réservé aux admins
router.post('/', verifyToken, isAdmin, controller.create);
router.put('/:id', verifyToken, isAdmin, controller.update);
router.delete('/:id', verifyToken, isAdmin, controller.remove);

module.exports = router;
