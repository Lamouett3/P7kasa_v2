import background from '../../assets/images/aboutbanner.png';
import './AboutBanner.css';

function AboutBanner() {
  return (
    <div className="aboutBanner">
      {/* Affichage de l'image de la bannière */}
      <img className="aboutBannerImg" src={background} alt="A Propos Bannière" />
    </div>
  );
};

export default AboutBanner;
