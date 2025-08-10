const repo = require('../repository/installationRepository');

// ➕ Ajouter
const create = async (data) => {
  const { titre, description, type } = data;
  if (!titre || !description || !type) {
    throw { status: 400, message: "Tous les champs sont requis (titre, description, type)." };
  }

  const id = await repo.create(data);
  return { id };
};

// 📋 Tous les items
const getAll = async () => {
  return await repo.getAll();
};

// 🔍 Par ID
const getOne = async (id) => {
  const item = await repo.getById(id);
  if (!item) throw { status: 404, message: "Installation non trouvée" };
  return item;
};

// ✏️ Modifier
const update = async (id, data) => {
  const updated = await repo.update(id, data);
  if (!updated) throw { status: 404, message: "Installation non trouvée ou non modifiée" };
  return true;
};

// ❌ Supprimer
const remove = async (id) => {
  const deleted = await repo.remove(id);
  if (!deleted) throw { status: 404, message: "Installation non trouvée" };
  return true;
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove
};
