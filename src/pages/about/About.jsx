import React from 'react';
import AboutBanner from '../../components/aboutBanner/AboutBanner';
import Collapse from '../../components/collapse/Collapse';
import aboutData from '../../data/aboutText';
import './About.css';

function About() {
  return (
    <div>
      <div className="container">
        <AboutBanner /> {/* Rendu du composant AboutBanner */}
        <section className="container_dropdown-about">
          <Collapse label="Fiabilité" data={aboutData.fiability} /> {/* Rendu du composant Collapse avec label "Fiabilité" et données de aboutData.fiability */}
          <Collapse label="Respect" data={aboutData.respect} /> {/* Rendu du composant Collapse avec label "Respect" et données de aboutData.respect */}
          <Collapse label="Service" data={aboutData.service} /> {/* Rendu du composant Collapse avec label "Service" et données de aboutData.service */}
          <Collapse label="Sécurité" data={aboutData.security} /> {/* Rendu du composant Collapse avec label "Sécurité" et données de aboutData.security */}
        </section>
      </div>
    </div>
  );
}

export default About;
