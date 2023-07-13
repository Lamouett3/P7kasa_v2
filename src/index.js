// Importation des modules nécessaires
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router" // Importation du RouterProvider de react-router
import router from './router'; // Importation de l'objet de routage

const root = ReactDOM.createRoot(document.getElementById('root')); // Création de la racine du rendu React
root.render(
  <React.StrictMode> {/* Mode strict de React */}
     <RouterProvider router={router}> {/* Fourniture de l'objet de routage au RouterProvider */}
    <App /> {/* Rendu du composant App */}
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals(); // Mesure des performances de l'application (Web Vitals)
