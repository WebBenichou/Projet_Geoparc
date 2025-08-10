const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

// 🔐 Authentification
router.post('/register', controller.register);
router.post('/login', controller.login);

// 👤 Profil utilisateur connecté
router.get('/me', verifyToken, controller.getProfile);

// 🧑‍💼 Routes admin
router.get('/', verifyToken, isAdmin, controller.getAllUsers);
router.delete('/:id', verifyToken, isAdmin, controller.deleteUser);

module.exports = router;
