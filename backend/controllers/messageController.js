const messageService = require('../services/messageService');

// ➕ POST /api/messages
exports.sendMessage = async (req, res) => {
  try {
    const msg = await messageService.send(req.user.id, req.body);
    res.status(201).json({ message: "Message envoyé", msg });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erreur serveur" });
  }
};

// 📋 GET /api/messages (admin)
exports.getAll = async (req, res) => {
  try {
    const messages = await messageService.getAll();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// ✅ PATCH /api/messages/:id/read (admin)
exports.markAsRead = async (req, res) => {
  try {
    await messageService.markRead(req.params.id);
    res.json({ message: "Message marqué comme lu" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erreur serveur" });
  }
};

// ❌ DELETE /api/messages/:id (admin)
exports.delete = async (req, res) => {
  try {
    await messageService.remove(req.params.id);
    res.json({ message: "Message supprimé" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erreur serveur" });
  }
};
