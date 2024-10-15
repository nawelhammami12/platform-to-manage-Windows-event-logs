import React from 'react';
import ReactDOM from 'react-dom/client'; // Mise à jour du chemin d'importation
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'; // Importez votre fichier CSS global ici si nécessaire

const root = ReactDOM.createRoot(document.getElementById('root')); // Créez la racine
root.render(
  <Router>
    <App />
  </Router>
);
