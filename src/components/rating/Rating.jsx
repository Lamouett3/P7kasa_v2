import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Rating.css';

function Rating() {
  const [rating, setRating] = useState(0); // Déclaration de la variable d'état 'rating' avec une valeur initiale de 0
  const { id } = useParams(); // Extraction du paramètre 'id' de l'URL grâce au hook 'useParams' de React Router

  useEffect(() => {
    fetch('../../logement.json') // Effectue une requête fetch pour récupérer les données du fichier JSON 'logement.json'
      .then(response => response.json())
      .then(data => data.find(item => item.id === id)) // Filtre les données pour trouver l'objet logement correspondant à l'id
      .then(data => setRating(data.rating)); // Met à jour l'état 'rating' avec la valeur du rating du logement
  }, [id]); // Utilisation de la dépendance 'id' pour recharger les données à chaque changement de l'id

  return (
    <div className="rating">
      {/* Affichage des étoiles en utilisant la fonction map pour itérer sur un tableau de 5 éléments */}
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? 'filled' : ''} // Applique la classe CSS 'filled' si l'index est inférieur au rating
          style={{ color: index < rating ? '#ff6060' : '#f2f2f2' }} // Applique la couleur en fonction du rating
        >
          <i className="fas fa-star"></i> {/* Affichage de l'icône d'étoile */}
        </span>
      ))}
    </div>
  );
}

export default Rating;
