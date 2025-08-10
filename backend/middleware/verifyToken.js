const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token manquant ou invalide' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // On ajoute les infos décodées à la requête (ex: id, role, email)
    next();
  } catch (err) {
    console.error('Erreur JWT :', err);
    return res.status(401).json({ message: 'Token invalide ou expiré' });
  }
}

module.exports = verifyToken;
