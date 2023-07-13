import background from '../../assets/images/Banniere.png';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      {/* Affichage de l'image de la bannière */}
      <img className="bannerImg" src={background} alt="Bannière" />

      <div className="banner__content">
        {/* Affichage du contenu de la bannière */}
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
    </div>
  );
};

export default Banner;
