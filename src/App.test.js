import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // Rendu du composant App dans un environnement de test
  const linkElement = screen.getByText(/learn react/i); // Recherche d'un élément contenant le texte "learn react"
  expect(linkElement).toBeInTheDocument(); // Vérification que l'élément est présent dans le DOM
});
