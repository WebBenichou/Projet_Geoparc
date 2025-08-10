const annonceService = require('../services/annonceService');

// ➕ POST /api/annonces
exports.create = async (req, res) => {
  try {
    const annonce = await annonceService.create(req.user.id, req.body);
    res.status(201).json({ message: "Annonce créée", annonce });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erreur serveur" });
  }
};

// 📋 GET /api/annonces
exports.getAll = async (req, res) => {
  try {
    const annonces = await annonceService.getAll();
    res.json(annonces);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors du chargement des annonces" });
  }
};

// ❌ DELETE /api/annonces/:id
exports.remove = async (req, res) => {
  try {
    await annonceService.remove(req.params.id);
    res.json({ message: "Annonce supprimée avec succès" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erreur serveur" });
  }
};
