import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FicheLogement.css";
import Carrousel from "../../components/carrousel/Carrousel";
import Collapse from "../../components/collapse/Collapse";
import Rating from "../../components/rating/Rating";
import Host from "../../components/host/Host";
import Tag from "../../components/tag/Tag";
import Error from "../error/Error";

function FicheLogement() {
  const [logement, setLogement] = useState({}); // Déclaration de la variable d'état 'logement' avec une valeur initiale d'un objet vide
  const { id } = useParams(); // Extraction du paramètre 'id' de l'URL grâce au hook 'useParams' de React Router

  useEffect(() => {
  // Effectue une requête fetch pour récupérer les données du logement
    fetch("../../logement.json")
      .then((response) => response.json())
      .then((data) => data.find((item) => item.id === id))
      .then((logement) => setLogement(logement));
  }, [id]);

  // Si logement est null ou vide, affiche la page d'erreur
  if (!logement || Object.keys(logement).length === 0) {
    return <Error />;
  }

  return (
    <div>
      <div className="fiche-logement">
        <Carrousel /> {/* Rendu du composant Carrousel */}
        <div className="profile-section">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <Host /> {/* Rendu du composant Host */}
          <Tag /> {/* Rendu du composant Tag */}
          <Rating /> {/* Rendu du composant Rating */}
        </div>
        <section className="dropdown__section">
          <Collapse label="Description" data={logement.description} /> {/* Rendu du composant Collapse avec label "Description" et données de logement.description */}
          <Collapse label="Equipements" data={logement.equipments} /> {/* Rendu du composant Collapse avec label "Equipements" et données de logement.equipments */}
        </section>
      </div>
    </div>
  );
}

export default FicheLogement;
