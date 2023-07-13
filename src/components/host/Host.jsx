import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Host.css';

function Host() {
    const [host, setHost] = useState(null); // Déclaration de la variable d'état 'host' avec une valeur initiale de null
    const { id } = useParams(); // Extraction du paramètre 'id' de l'URL grâce au hook 'useParams' de React Router

    useEffect(() => {
        fetch('../../logement.json') // Effectue une requête fetch pour récupérer les données du fichier JSON 'logement.json'
            .then(response => response.json())
            .then(data => data.find(item => item.id === id)) // Filtre les données pour trouver l'objet logement correspondant à l'id
            .then(data => setHost(data.host)); // Met à jour l'état 'host' avec l'objet 'host' du logement
    }, [id]); // Utilisation de la dépendance 'id' pour recharger les données à chaque changement de l'id

    return (
        <div className="profile-bubble">
            {/* Affichage des informations de l'hôte si 'host' n'est pas null */}
            {host && (
                <>
                    <img
                        className="profile-picture"
                        src={host.picture}
                        alt={host.name}
                    />
                    <span className="profile-name">{host.name}</span>
                </>
            )}
        </div>
    );
}

export default Host;
