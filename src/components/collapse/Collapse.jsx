import React, { useState } from "react";
import "./Collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

// Le hook "useState"  renvoie un tableau avec deux éléments : la valeur actuelle de l'état (dans ce cas, "isOpen") et une fonction pour mettre à jour cette valeur (dans ce cas, "setIsOpen"). 
function Collapse({ label, data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      {/*
   * - Déclaration de la variable d'état 'isOpen' pour gérer l'état d'ouverture/fermeture du dropdown.
   */}
      <button className="dropdown__button" onClick={() => setIsOpen(!isOpen)}>
        {label}
        <span className="dropdown__icon">
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </span>
      </button>
      {isOpen && (
        <div className="dropdown__content">
          {/*
           * - Vérification si 'data' est un tableau.
           * - Si oui, affichage des éléments du tableau sous forme de liste.
           * - Si non, affichage du contenu en tant que paragraphe.
           */}
          {Array.isArray(data) ? (
            <ul className="dropdown__list">
              {data.map((item, index) => (
                <li key={index} className="dropdown__list-item">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p>{data}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
