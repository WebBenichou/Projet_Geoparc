const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

// Récupérer le port dans .env ou 5000 par défaut
const PORT = process.env.PORT || 5000;

// Démarrer le serveur avec gestion d’erreur
app.listen(PORT, (err) => {
  if (err) {
    console.error('❌ Erreur au démarrage du serveur:', err);
    process.exit(1);
  }
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
