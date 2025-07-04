import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateTeam: React.FC = () => {
  const [team, setTeam] = useState({
    nom: '',
    categorie: '',
    tournoiId: null as number | null,
  });
  const [tournois, setTournois] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/tournaments')
      .then((response) => {
        setTournois(response.data);
        console.log('Tournois chargés:', response.data);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des tournois:', error);
      });
  }, []);

  const createTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!team.nom || !team.categorie || !team.tournoiId) {
      alert('Tous les champs sont obligatoires.');
      return;
    }

    const newTeam = {
      nom: team.nom,
      categorie: team.categorie,
      tournoi: { id: team.tournoiId },
    };

    axios.post('http://localhost:8080/api/teams', newTeam, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        console.log('Équipe créée:', response.data);
        navigate('/admin/teams');
      })
      .catch((error) => {
        console.error('Erreur lors de la création de l\'équipe:', error);
        alert('Erreur lors de la création de l\'équipe. Veuillez réessayer.');
      });
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

          .create-team-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .create-team-container h2 {
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
            margin-top: 15px;
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
        <div className="create-team-container">
          <h2>Ajouter une Nouvelle Équipe</h2>
          <form onSubmit={createTeam}>
            <div className="form-group">
              <label>Nom de l'Équipe</label>
              <input
                type="text"
                className="form-control"
                value={team.nom}
                onChange={(e) => setTeam({ ...team, nom: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Catégorie</label>
              <select
                className="form-control"
                value={team.categorie}
                onChange={(e) => setTeam({ ...team, categorie: e.target.value })}
                required
              >
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
                <option value="Handball">Handball</option>
              </select>
            </div>
            <div className="form-group">
              <label>Tournoi</label>
              <select
                className="form-control"
                value={team.tournoiId || ''}
                onChange={(e) => setTeam({ ...team, tournoiId: Number(e.target.value) })}
                required
              >
                <option value="">Sélectionner un tournoi</option>
                {tournois.map((tournoi) => (
                  <option key={tournoi.id} value={tournoi.id}>
                    {tournoi.nom}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Créer Équipe
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateTeam;