import './Error.css'; // Importation du fichier CSS pour les styles spécifiques à la page d'erreur

function Error() {

  const handleClick = () => {
    window.location.href = '/'; // Redirection vers la page d'accueil lorsque le lien est cliqué
  }

  return (
    <div className="error-container"> {/* Conteneur de la page d'erreur */}
      <div className="error-text"> {/* Contenu de la page d'erreur */}
        <h1>404</h1> {/* Titre de la page d'erreur */}
        <p>Oups! La page que vous demandez n'existe pas.</p> {/* Message d'erreur */}
        <div className="error__home"> {/* Conteneur pour le lien de retour à la page d'accueil */}
          <a href="/" onClick={handleClick}>Retourner sur la page d’accueil</a> {/* Lien de retour à la page d'accueil */}
        </div>
      </div>
    </div>
  );
}

export default Error;
