const service = require('../services/installationService');

// ➕ Ajouter (admin)
exports.create = async (req, res) => {
  try {
    const installation = await service.create(req.body);
    res.status(201).json({ message: "Installation ajoutée", installation });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erreur serveur" });
  }
};

// 📋 Tout afficher
exports.getAll = async (req, res) => {
  try {
    const installations = await service.getAll();
    res.json(installations);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// 🔍 Par ID
exports.getById = async (req, res) => {
  try {
    const item = await service.getOne(req.params.id);
    res.json(item);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erreur serveur" });
  }
};

// ✏️ Modifier
exports.update = async (req, res) => {
  try {
    await service.update(req.params.id, req.body);
    res.json({ message: "Installation mise à jour" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erreur serveur" });
  }
};

// ❌ Supprimer
exports.remove = async (req, res) => {
  try {
    await service.remove(req.params.id);
    res.json({ message: "Installation supprimée" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erreur serveur" });
  }
};
