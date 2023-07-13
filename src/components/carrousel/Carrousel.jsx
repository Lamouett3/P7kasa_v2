import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Carrousel.css';
import { useParams } from "react-router-dom";

function Carrousel() {
  const [data, setData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();

  // Effectue une requête pour récupérer les données du carrousel en fonction de l'ID du logement
  useEffect(() => {
    fetch('../../logement.json')
      .then(response => response.json())
      .then(data => data.find(item => item.id === id))
      .then(data => setData(data));
  }, [id]);

  // Passe à l'image suivante dans le carrousel
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % data.pictures.length);
  };

  // Passe à l'image précédente dans le carrousel
  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + data.pictures.length) % data.pictures.length);
  };
  
  return (
    <div className="carrousel">
      {/* Affichage de l'image actuellement sélectionnée */}
      <img src={data.pictures && data.pictures[currentIndex]} alt={data.title} />

      {/* Affichage du compteur d'images si le carrousel contient plus d'une image */}
      {data.pictures && data.pictures.length > 1 && (
        <div className="carrousel__counter">
          <span className="carrousel__counter-current">{currentIndex + 1}</span> / {data.pictures.length}
        </div>
      )}

      {/* Bouton pour passer à l'image précédente */}
      <button className={`carrousel__button carrousel__button--prev ${data.pictures && data.pictures.length <= 1 ? 'hidden' : ''}`} onClick={handlePrevClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Bouton pour passer à l'image suivante */}
      <button className={`carrousel__button carrousel__button--next ${data.pictures && data.pictures.length <= 1 ? 'hidden' : ''}`} onClick={handleNextClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Carrousel;
