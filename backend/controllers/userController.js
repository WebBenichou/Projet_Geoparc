const service = require('../services/userService');

// ✅ Enregistrement
exports.register = async (req, res) => {
  try {
    const user = await service.register(req.body);
    res.status(201).json({ message: "Inscription réussie", user });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

// ✅ Connexion
exports.login = async (req, res) => {
  try {
    const result = await service.login(req.body);
    res.json({ message: "Connexion réussie", ...result });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

// 👤 Profil de l’utilisateur connecté
exports.getProfile = async (req, res) => {
  try {
    const user = await service.getProfile(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

// 🧑‍💼 Admin : Liste de tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await service.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// ❌ Admin : Supprimer utilisateur
exports.deleteUser = async (req, res) => {
  try {
    await service.deleteUser(req.params.id);
    res.json({ message: "Utilisateur supprimé" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};
