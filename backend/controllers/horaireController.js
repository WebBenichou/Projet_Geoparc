const horaireService = require('../services/horaireService');

// GET /api/horaires
exports.getAll = async (req, res) => {
  try {
    const horaires = await horaireService.getAll();
    res.json(horaires);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// POST /api/horaires (admin)
exports.create = async (req, res) => {
  try {
    const horaire = await horaireService.add(req.body);
    res.status(201).json({ message: "Horaire ajouté", horaire });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erreur serveur" });
  }
};

// DELETE /api/horaires/:id (admin)
exports.delete = async (req, res) => {
  try {
    await horaireService.remove(req.params.id);
    res.json({ message: "Horaire supprimé avec succès" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erreur serveur" });
  }
};
