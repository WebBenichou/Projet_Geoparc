const messageRepo = require('../repository/messageRepository');

// ➕ Envoyer un message (visiteur)
const send = async (user_id, { sujet, message }) => {
  if (!sujet || !message) {
    throw { status: 400, message: "Sujet et message sont requis." };
  }

  const id = await messageRepo.createMessage(user_id, sujet, message);
  return { id, sujet };
};

// 📋 Obtenir tous les messages (admin)
const getAll = async () => {
  return await messageRepo.getAllMessages();
};

// ✅ Marquer comme lu (admin)
const markRead = async (id) => {
  const success = await messageRepo.markAsRead(id);
  if (!success) {
    throw { status: 404, message: "Message non trouvé" };
  }
};

// ❌ Supprimer (admin)
const remove = async (id) => {
  const success = await messageRepo.deleteMessage(id);
  if (!success) {
    throw { status: 404, message: "Message introuvable ou déjà supprimé" };
  }
};

module.exports = {
  send,
  getAll,
  markRead,
  remove
};
