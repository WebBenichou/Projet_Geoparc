const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const repo = require('../repository/userRepository');

const SECRET = process.env.JWT_SECRET || 'secretKey';

// 🔐 Enregistrer un nouvel utilisateur
const register = async ({ nom, email, mot_de_passe }) => {
  const existing = await repo.findByEmail(email);
  if (existing) {
    throw { status: 400, message: "Email déjà utilisé" };
  }

  const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
  const id = await repo.createUser({ nom, email, hashedPassword });
  return { id, email };
};

// 🔐 Connexion
const login = async ({ email, mot_de_passe }) => {
  const user = await repo.findByEmail(email);
  if (!user) {
    throw { status: 401, message: "Email ou mot de passe incorrect" };
  }

  const valid = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
  if (!valid) {
    throw { status: 401, message: "Email ou mot de passe incorrect" };
  }

  const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: '2h' });
  return { token, user: { id: user.id, nom: user.nom, role: user.role } };
};

// 👤 Récupérer le profil
const getProfile = async (id) => {
  const user = await repo.findById(id);
  if (!user) {
    throw { status: 404, message: "Utilisateur non trouvé" };
  }
  return user;
};

// 🧑‍💼 Tous les utilisateurs (admin)
const getAllUsers = async () => {
  return await repo.getAll();
};

// ❌ Supprimer
const deleteUser = async (id) => {
  const deleted = await repo.remove(id);
  if (!deleted) throw { status: 404, message: "Utilisateur introuvable" };
  return true;
};

module.exports = {
  register,
  login,
  getProfile,
  getAllUsers,
  deleteUser
};
