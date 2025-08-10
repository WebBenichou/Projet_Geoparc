import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img4.jpg'; // Assurez-vous que ce chemin est correct

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo Géoparc" width="40" height="40" className="me-2" />
          <span className="fw-bold">Géoparc M'Goun</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/installations">Installations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reservation">Réservation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galerie">Galerie</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/annonces">Annonces</Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link to="/register" className="btn btn-outline-primary me-2">Inscrire</Link>
            <Link to="/login" className="btn btn-primary">Connecter</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
