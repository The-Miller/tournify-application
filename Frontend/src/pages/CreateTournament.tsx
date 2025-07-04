import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateTournament: React.FC = () => {
  const [tournament, setTournament] = useState({
    nom: '',
    categorie: '',
    date: '',
  });
  const [communityManager, setCommunityManager] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const createTournament = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Créer le Community Manager
      const communityManagerResponse = await axios.post(
        'http://localhost:8080/api/utilisateurs/create-with-role',
        {
          nom: communityManager.nom,
          prenom: communityManager.prenom,
          email: communityManager.email,
          password: communityManager.password,
          role: 'MANAGER',
        }
      );
      console.log('Community Manager créé:', communityManagerResponse.data);

      // Créer le tournoi avec l'ID du Community Manager
      const tournamentResponse = await axios.post('http://localhost:8080/api/tournaments', {
        nom: tournament.nom,
        categorie: tournament.categorie,
        date: tournament.date,
        communityManagerId: communityManagerResponse.data.id,
      });
      console.log('Tournoi créé:', tournamentResponse.data);
      navigate('/dashboard-admin');
    } catch (error) {
      console.error('Erreur lors de la création:', error);
      alert('Erreur lors de la création. Veuillez réessayer.');
    }
  };

  return (
    <div className="dashboard-container">
      <style>
        {`
          .dashboard-container {
            display: flex;
            height: 100vh;
          }

          .sidebar {
            width: 250px;
            background-color: #6BA7E2;
            color: white;
            padding: 20px;
          }

          .logo-container {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
          }

          .logo {
            width: 100px;
            margin-right: 80px;
          }

          .sidebar-menu ul {
            list-style: none;
            padding: 0;
          }

          .sidebar-menu li {
            margin-bottom: 15px;
          }

          .sidebar-menu a {
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
          }

          .sidebar-menu a.active {
            font-weight: bold;
          }

          .sidebar-menu i {
            margin-right: 10px;
          }

          .content {
            flex-grow: 1;
            padding: 30px;
            background-color: #f5f5f5;
            height: calc(100vh - 60px);
            overflow-y: auto;
          }

          .create-tournament-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .create-tournament-container h2,
          .create-tournament-container h3 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
          }

          .form-group {
            margin-bottom: 15px;
          }

          .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
          }

          .form-control {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ced4da;
            border-radius: 4px;
            box-sizing: border-box;
          }

          .form-control[type="date"] {
            padding: 8px;
          }

          button.btn-primary {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
          }

          button.btn-primary:hover {
            background-color: #0056b3;
          }
        `}
      </style>
      <aside className="sidebar">
        <div className="logo-container">
          {/* <img src="assets/logo.png" alt="Tournify Logo" className="logo"> */}
          {/* <h2>Tournify</h2> */}
        </div>
        <nav className="sidebar-menu">
          <ul>
            {/* <li><a href="/admin/users"><i className="fa fa-user"></i> Gestion des Utilisateurs</a></li> */}
            <li><a href="/dashboard-admin"><i className="fa fa-trophy"></i> Gestion des Tournois</a></li>
            <li><a href="/admin/teams"><i className="fa fa-users"></i> Gestion des Équipes</a></li>
            <li><a href="/gestion-matchs"><i className="fa fa-life-ring"></i> Matchs & Résultats</a></li>
            <li><a href="/admin/results"><i className="fa fa-bar-chart"></i> Classements équipes/joueurs</a></li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <div className="create-tournament-container">
          <h2>Créer un Nouveau Tournoi</h2>
          <form onSubmit={createTournament}>
            <div className="form-group">
              <label>Nom du Tournoi</label>
              <input
                type="text"
                className="form-control"
                value={tournament.nom}
                onChange={(e) => setTournament({ ...tournament, nom: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Catégorie</label>
              <select
                className="form-control"
                value={tournament.categorie}
                onChange={(e) => setTournament({ ...tournament, categorie: e.target.value })}
                required
              >
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
                <option value="Handball">Handball</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date du Tournoi</label>
              <input
                type="date"
                className="form-control"
                value={tournament.date}
                onChange={(e) => setTournament({ ...tournament, date: e.target.value })}
                required
              />
            </div>

            <h3>Inscription du Community Manager</h3>
            <div className="form-group">
              <label>Nom</label>
              <input
                type="text"
                className="form-control"
                value={communityManager.nom}
                onChange={(e) => setCommunityManager({ ...communityManager, nom: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Prénom</label>
              <input
                type="text"
                className="form-control"
                value={communityManager.prenom}
                onChange={(e) => setCommunityManager({ ...communityManager, prenom: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={communityManager.email}
                onChange={(e) => setCommunityManager({ ...communityManager, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Mot de passe</label>
              <input
                type="password"
                className="form-control"
                value={communityManager.password}
                onChange={(e) => setCommunityManager({ ...communityManager, password: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Créer Tournoi
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateTournament;