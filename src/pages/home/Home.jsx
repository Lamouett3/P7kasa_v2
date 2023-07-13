//import Header from '../../components/Header/Header';
import Banner from '../../components/banner/Banner';
import CardsSection from '../../components/card/Card';
//import './App.css'; // css pour animation logo react

function Home() {
  return (
    <div>
      <Banner /> {/* Rendu du composant Banner */}
      <CardsSection /> {/* Rendu du composant CardsSection */}
    </div>
  );
}

export default Home;
