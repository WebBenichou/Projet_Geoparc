const horaireRepo = require('../repository/horaireRepository');

// 📋 Récupérer tous les horaires
const getAll = async () => {
  return await horaireRepo.getAllHoraires();
};

// ➕ Ajouter un horaire (admin)
const add = async ({ date, heure, capacite_max }) => {
  if (!date || !heure) {
    throw { status: 400, message: "Date et heure obligatoires." };
  }

  if (new Date(date) < new Date()) {
    throw { status: 400, message: "La date ne peut pas être dans le passé." };
  }

  const id = await horaireRepo.addHoraire({ date, heure, capacite_max: capacite_max || 30 });
  return { id };
};

// ❌ Supprimer un horaire (admin)
const remove = async (id) => {
  const success = await horaireRepo.deleteHoraire(id);
  if (!success) {
    throw { status: 404, message: "Horaire introuvable ou déjà supprimé." };
  }
  return true;
};

module.exports = {
  getAll,
  add,
  remove
};
