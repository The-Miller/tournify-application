import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditTeam: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [team, setTeam] = useState({
    nom: '',
    categorie: '',
    tournoi: { id: null as number | null },
  });
  const [tournaments, setTournaments] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      loadTournaments();
      loadTeamDetails(Number(id));
    }
  }, [id]);

  const loadTournaments = () => {
    axios.get('http://localhost:8080/api/tournaments')
      .then((response) => {
        setTournaments(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des tournois:', error);
      });
  };

  const loadTeamDetails = (teamId: number) => {
    axios.get(`http://localhost:8080/api/teams/${teamId}`)
      .then((response) => {
        setTeam(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des détails de l\'équipe:', error);
      });
  };

  const updateTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:8080/api/teams/${id}`, team)
        .then((response) => {
          console.log('Équipe mise à jour:', response.data);
          navigate('/admin/teams');
        })
        .catch((error) => {
          console.error('Erreur lors de la mise à jour de l\'équipe:', error);
          alert('Erreur lors de la mise à jour de l\'équipe. Veuillez réessayer.');
        });
    }
  };

  const cancel = () => {
    navigate('/admin/teams');
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

          .edit-team-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .edit-team-container h2 {
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

          button.btn {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 15px;
          }

          button.btn-primary {
            background-color: #007bff;
            color: white;
            border: none;
          }

          button.btn-primary:hover {
            background-color: #0056b3;
          }

          button.btn-secondary {
            background-color: #6c757d;
            color: white;
            border: none;
          }

          button.btn-secondary:hover {
            background-color: #5a6268;
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
        <div className="edit-team-container">
          <h2>Modifier Équipe</h2>
          <form onSubmit={updateTeam}>
            <div className="form-group">
              <label htmlFor="nom">Nom de l'Équipe :</label>
              <input
                type="text"
                id="nom"
                className="form-control"
                value={team.nom}
                onChange={(e) => setTeam({ ...team, nom: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="categorie">Catégorie :</label>
              <input
                type="text"
                id="categorie"
                className="form-control"
                value={team.categorie}
                onChange={(e) => setTeam({ ...team, categorie: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tournoi">Sélectionner le Tournoi :</label>
              <select
                id="tournoi"
                className="form-control"
                value={team.tournoi.id || ''}
                onChange={(e) => setTeam({ ...team, tournoi: { id: Number(e.target.value) } })}
                required
              >
                <option value="">Sélectionner un tournoi</option>
                {tournaments.map((tournament) => (
                  <option key={tournament.id} value={tournament.id}>
                    {tournament.nom}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Mettre à jour l'Équipe
            </button>
          </form>
          <button className="btn btn-secondary" onClick={cancel}>
            Annuler
          </button>
        </div>
      </main>
    </div>
  );
};

export default EditTeam;