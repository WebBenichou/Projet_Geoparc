const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authRepository = require('../repository/authRepository');

const SECRET_KEY = process.env.JWT_SECRET;

// 🔐 Inscription
const register = async ({ nom, email, mot_de_passe, role = 'visiteur' }) => {
  if (!nom || !email || !mot_de_passe) {
    throw { status: 400, message: "Tous les champs sont requis." };
  }

  // Vérifier si l'email existe déjà
  const existingUser = await authRepository.findByEmail(email);
  if (existingUser) {
    throw { status: 409, message: "Cet email est déjà utilisé." };
  }

  // Hasher le mot de passe
  const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

  // Insérer dans la BDD
  const userId = await authRepository.register(nom, email, hashedPassword, role);

  return { id: userId, nom, email, role };
};

// 🔑 Connexion
const login = async ({ email, mot_de_passe }) => {
  if (!email || !mot_de_passe) {
    throw { status: 400, message: "Email et mot de passe requis." };
  }

  const user = await authRepository.findByEmail(email);
  if (!user) {
    throw { status: 401, message: "Email ou mot de passe incorrect." };
  }

  const isValid = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
  if (!isValid) {
    throw { status: 401, message: "Email ou mot de passe incorrect." };
  }

  // Générer le token avec le rôle
  const token = jwt.sign(
    {
      id: user.id,
      nom: user.nom,
      email: user.email,
      role: user.role // on inclut le rôle dans le token
    },
    SECRET_KEY,
    { expiresIn: '24h' }
  );

  return {
    token,
    user: {
      id: user.id,
      nom: user.nom,
      email: user.email,
      role: user.role
    }
  };
};

module.exports = { register, login };
