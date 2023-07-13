import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Tag.css';

function Tag() {
    const [tagData, setTagData] = useState([]); // Déclaration de la variable d'état 'tagData' avec une valeur initiale d'un tableau vide
    const { id } = useParams(); // Extraction du paramètre 'id' de l'URL grâce au hook 'useParams' de React Router

    useEffect(() => {
        fetch('../../logement.json') // Effectue une requête fetch pour récupérer les données du fichier JSON 'logement.json'
            .then(response => response.json())
            .then(data => data.find(item => item.id === id)) // Filtre les données pour trouver l'objet logement correspondant à l'id
            .then(data => setTagData(data.tags)); // Met à jour l'état 'tagData' avec les données des tags du logement
    }, [id]); // Utilisation de la dépendance 'id' pour recharger les données à chaque changement de l'id

    return (
        <div className="container_tag">
            {/* Affichage des tags en utilisant la fonction map pour itérer sur chaque élément du tableau 'tagData' */}
            {tagData.map((tagItem, index) => <div className="tag_container" key={index}><span>{tagItem}</span></div>)}
        </div>
    );
}

export default Tag;
