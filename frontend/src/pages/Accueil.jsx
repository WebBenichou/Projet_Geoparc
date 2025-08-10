import React from 'react';
import './Accueil';
import HeroSection from '../components/HeroSection';

export default function Accueil() {
  return (
    <div>
        <HeroSection/>
      {/* Hero Section */}
      <section className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Bienvenue au Géoparc M'Goun</h1>
          <p className="lead">Un trésor naturel niché au cœur des montagnes de l'Atlas marocain.</p>
        </div>
      </section>

      {/* Présentation Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">À propos du Géoparc</h2>
          <p>
            Le <strong>Géoparc M'Goun</strong>, situé dans la région d'Azilal au Maroc, est un site géologique et culturel
            exceptionnel reconnu par l'UNESCO. Il est célèbre pour ses formations rocheuses impressionnantes, ses fossiles
            anciens, et sa biodiversité unique.
          </p>
          <p>
            C’est également un lieu vivant de culture amazighe, avec des villages traditionnels, une riche histoire
            locale et un patrimoine immatériel remarquable. Le parc encourage le tourisme durable et l’éducation à
            l’environnement, en proposant des sentiers de randonnée, des musées géologiques et des activités pour
            les visiteurs de tout âge.
          </p>
        </div>
      </section>
    </div>
  );
}
