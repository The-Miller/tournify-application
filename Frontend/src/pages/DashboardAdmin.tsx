import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTournaments, deleteTournament } from '../services/tournamentService';

const DashboardAdmin: React.FC = () => {
  const [tournaments, setTournaments] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadTournaments();
  }, []);

  const loadTournaments = async () => {
    try {
      const data = await getTournaments();
      setTournaments(data);
    } catch (error) {
      console.error('Erreur lors du chargement des tournois :', error);
    }
  };

  const editTournament = (id: number) => {
    navigate(`/edit-tournament/${id}`);
  };

  const deleteTournamentHandler = async (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce tournoi ?')) {
      try {
        await deleteTournament(id);
        console.log('Tournoi supprimé avec succès');
        loadTournaments();
      } catch (error) {
        console.error('Erreur lors de la suppression du tournoi :', error);
      }
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
          }

          .dashboard-title {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .tournaments-management {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .tournaments-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }

          .tournaments-table th,
          .tournaments-table td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }

          .btn {
            margin: 5px;
            padding: 5px 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .btn-primary {
            background-color: #007bff;
            color: white;
          }

          .btn-primary:hover {
            background-color: #0056b3;
          }

          .btn-danger {
            background-color: #dc3545;
            color: white;
          }

          .btn-danger:hover {
            background-color: #c82333;
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
        {/* <h1 className="dashboard-title">Dashboard de l'Administrateur</h1> */}
        <div className="tournaments-management">
          <h2>Gestion des Tournois</h2>
          <table className="tournaments-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nom Tournoi</th>
                <th>Catégorie</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tournaments.map((tournament) => (
                <tr key={tournament.id}>
                  <td>{tournament.id}</td>
                  <td>{tournament.nom}</td>
                  <td>{tournament.categorie}</td>
                  <td>{tournament.date}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => editTournament(tournament.id)}
                    >
                      Modifier
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTournamentHandler(tournament.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/create-tournament')}
          >
            Créer un nouveau Tournoi
          </button>
        </div>
      </main>
    </div>
  );
};

export default DashboardAdmin;