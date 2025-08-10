const annonceRepo = require('../repository/annonceRepository');

// ➕ Créer une annonce
const create = async (admin_id, { titre, contenu, image_url }) => {
  if (!titre || !contenu) {
    throw { status: 400, message: "Le titre et le contenu sont obligatoires." };
  }

  const id = await annonceRepo.createAnnonce({ titre, contenu, image_url, admin_id });
  return { id, titre };
};

// 📋 Obtenir toutes les annonces
const getAll = async () => {
  return await annonceRepo.getAllAnnonces();
};

// ❌ Supprimer une annonce
const remove = async (id) => {
  const success = await annonceRepo.deleteAnnonce(id);
  if (!success) {
    throw { status: 404, message: "Annonce introuvable" };
  }
  return true;
};

module.exports = {
  create,
  getAll,
  remove
};
