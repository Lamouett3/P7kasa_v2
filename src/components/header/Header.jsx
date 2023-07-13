import logo from '../../assets/images/Logo.png';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kasa"/> {/* Affichage du logo en utilisant la variable 'logo' qui contient l'URL de l'image */}

      <nav>
        <ul>
          <li><a href="/">Accueil</a></li> {/* Lien vers la page d'accueil */}
          <li><a href="/Apropos">À propos</a></li> {/* Lien vers la page "À propos" */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
