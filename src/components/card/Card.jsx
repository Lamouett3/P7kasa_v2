import { useState, useEffect } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function CardsSection() {
  const [data, setData] = useState([]);

  // Effectue une requête pour récupérer les données des cartes de logement
  useEffect(() => {
    fetch('./logement.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="cards-section">
      {data.map(card => (
        <Link key={card.id} to={`/logement/${card.id}`}>
          <div className="card" key={card.id}>
            {/* Affiche l'image de la carte */}
            <img src={card.cover} alt={card.title} />
            {/* Affiche le titre de la carte */}
            <h2>{card.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardsSection;
