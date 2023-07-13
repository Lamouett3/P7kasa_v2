// Importation des modules nécessaires
import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import FicheLogement from "./pages/ficheLogement/FicheLogement";
import Error from "./pages/error/Error";

// Création du routage de l'application
const router = createBrowserRouter([
  {
    element: <App />, // Composant racine de l'application
    children: [
      { path: "/", element: <Home /> }, // Route pour la page d'accueil
      { path: "/apropos", element: <About /> }, // Route pour la page "À propos"
      {
        element: <FicheLogement />, // Composant pour la fiche de logement
        path:"/logement/:id", // Route pour afficher une fiche de logement spécifique en utilisant un paramètre dynamique ":id"
      },
      { path: "*", element: <Error /> }, // Route générique pour gérer les autres routes non définies (erreur 404)
    ],
  },
])

export default router // Exportation de l'objet de routage
