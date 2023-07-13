import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from "react-router-dom"

function App() {
  return (
    <main>
      <Header /> {/* Rendu du composant Header */}
      <Outlet /> {/* Utilisation du composant Outlet de react-router-dom */}
      <Footer /> {/* Rendu du composant Footer */}
    </main>
  );
}

export default App;
