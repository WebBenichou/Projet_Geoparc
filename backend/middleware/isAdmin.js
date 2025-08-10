module.exports = function (req, res, next) {
  if (req.user && req.user.role === 'admin') {
    // ✅ L'utilisateur est un admin, on continue
    next();
  } else {
    // ❌ Accès refusé
    res.status(403).json({ message: "Accès réservé aux administrateurs." });
  }
};
