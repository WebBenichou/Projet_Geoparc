const express = require('express');
const cors = require('cors');
const db = require('./data/db'); // Connexion à MySQL
const mainRouter = require('./routes'); // Router principal

const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());

// Routes API
app.use('/api', mainRouter);

// Route de test
app.get('/', (req, res) => {
  res.send("Bienvenue sur l'API du Musée Géoparc M'Goun");
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ message: "Route introuvable" });
});

module.exports = app;
