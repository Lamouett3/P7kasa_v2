import './Footer.css'; // Importation du fichier CSS pour les styles spécifiques au composant
import LogoFooter from '../../assets/images/LogoFooter.png'; // Importation de l'image du logo du footer

function Footer() {
  return (
    <footer className="footer"> {/* Balise <footer> utilisée comme conteneur principal du footer */}
      <div className="footer-logo"> {/* Div pour le logo et le texte du footer */}
        <img src={LogoFooter} alt="Logo" /> {/* Affichage du logo du footer en utilisant la variable 'LogoFooter' qui contient l'URL de l'image */}
        <p>© 2020 Kasa. All rights reserved</p> {/* Texte du copyright */}
      </div>
    </footer>
  );
};

export default Footer;
