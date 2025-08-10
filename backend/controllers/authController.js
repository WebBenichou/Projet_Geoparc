const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ message: 'Inscription réussie', user });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || 'Erreur serveur' });
  }
};

exports.login = async (req, res) => {
  try {
    const data = await authService.login(req.body);
    res.json(data);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || 'Erreur serveur' });
  }
};
