// pages/Accueil.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/img3.jfif'; // Image principale
import secondaryImage from '../assets/img5.jpg'; // Image secondaire
import 'animate.css';

export default function Accueil() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden" style={{ height: "90vh" }}>
        <div className="position-absolute w-100 h-100">
          <img 
            src={heroImage} 
            alt="Géoparc M'goun Azilal - Paysages naturels" 
            className="w-100 h-100 object-fit-cover"
            style={{ filter: 'brightness(0.7)' }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
        </div>

        <div className="container position-relative z-index-1 h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-2 fw-bold text-white mb-4 animate__animated animate__fadeInDown">
                <span className="text-warning">GÉOPARC M'GOUN</span> - Azilal
              </h1>
              <p className="lead text-white mb-5 animate__animated animate__fadeIn animate__delay-1s">
                Découvrez un joyau géologique unique, reconnu par l'UNESCO, au cœur des montagnes de l'Atlas
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start animate__animated animate__fadeInUp animate__delay-2s mb-5">
                <Link to="/circuits" className="btn btn-warning btn-lg px-4 py-3 rounded-pill shadow">
                  Nos Circuits
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill">
                  Visiter Maintenant
                </Link>
              </div>
              <div className="animate__animated animate__fadeIn animate__delay-3s">
                <span className="badge bg-light text-dark p-2">
                  <i className="bi bi-award-fill me-2"></i>
                  Site classé UNESCO Global Geopark
                </span>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block animate__animated animate__fadeIn animate__delay-1s">
              <div className="p-4 position-relative">
                <img 
                  src={secondaryImage} 
                  alt="Détails géologiques du M'goun" 
                  className="img-fluid rounded-4 shadow-lg" 
                  style={{ border: "5px solid rgba(255,255,255,0.2)" }}
                />
                <div className="position-absolute bottom-0 start-0 translate-middle-y ms-4 bg-success text-white p-2 rounded-pill shadow">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  3 407 m d'altitude
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute bottom-0 w-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" 
                  d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,181.3C672,192,768,224,864,218.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
      </section>
    </div>
  );
}