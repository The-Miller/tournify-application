import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/apiService';

const MatchManagement: React.FC = () => {
  const [equipes, setEquipes] = useState<any[]>([]);
  const [tournois, setTournois] = useState<any[]>([]);
  const [matches, setMatches] = useState<any[]>([]);
  const [matchToEdit, setMatchToEdit] = useState<any>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadEquipes();
    loadTournois();
    loadMatches();
  }, []);

  const loadEquipes = () => {
    apiService.getEquipes()
      .then((response) => setEquipes(response.data))
      .catch((error) => console.error('Erreur lors du chargement des équipes:', error));
  };

  const loadTournois = () => {
    apiService.getTournois()
      .then((response) => setTournois(response.data))
      .catch((error) => console.error('Erreur lors du chargement des tournois:', error));
  };

  const loadMatches = () => {
    apiService.getMatches()
      .then((response) => setMatches(response.data))
      .catch((error) => console.error('Erreur lors du chargement des matchs:', error));
  };

  const startNewMatch = () => {
    setIsEditMode(false);
    setMatchToEdit({
      equipeA: null,
      equipeB: null,
      date: '',
      scoreA: 0,
      scoreB: 0,
      tournoi: null,
      statut: 'En attente',
    });
  };

  const editMatch = (match: any) => {
    setIsEditMode(true);
    setMatchToEdit({ ...match });
  };

  const saveMatch = () => {
    if (isEditMode && matchToEdit?.id) {
      apiService.updateMatch(matchToEdit)
        .then(() => {
          loadMatches();
          setMatchToEdit(null);
        })
        .catch((error) => console.error('Erreur lors de la mise à jour du match:', error));
    } else {
      apiService.addMatch(matchToEdit)
        .then(() => {
          loadMatches();
          setMatchToEdit(null);
        })
        .catch((error) => console.error('Erreur lors de la création du match:', error));
    }
  };

  const cancelEdit = () => {
    setMatchToEdit(null);
  };

  const deleteMatch = (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce match ?')) {
      apiService.deleteMatch(id)
        .then(() => loadMatches())
        .catch((error) => console.error('Erreur lors de la suppression du match:', error));
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

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          h2, h3 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
          }

          .table {
            width: 100%;
            margin-bottom: 20px;
            border-collapse: collapse;
          }

          .table thead {
            background-color: #4CAF50;
            color: white;
          }

          .table th,
          .table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }

          .table th:nth-child(1),
          .table td:nth-child(1) {
            width: 20%;
          }

          .table th:nth-child(2),
          .table td:nth-child(2) {
            width: 20%;
          }

          .table th:nth-child(3),
          .table td:nth-child(3) {
            width: 21%;
          }

          .table th:nth-child(4),
          .table td:nth-child(4) {
            width: 20%;
          }

          .table th:nth-child(5),
          .table td:nth-child(5) {
            width: 20%;
          }

          .table th:nth-child(6),
          .table td:nth-child(6) {
            width: 15%;
          }

          .table th:nth-child(7),
          .table td:nth-child(7) {
            width: 10%;
          }

          .table th:nth-child(8),
          .table td:nth-child(8) {
            width: 20%;
          }

          .table tbody tr:hover {
            background-color: #f5f5f5;
          }

          .btn {
            padding: 8px 10px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
          }

          .btn-primary {
            background-color: #007bff;
            color: white;
          }

          .btn-primary:hover {
            background-color: #0056b3;
          }

          .btn-success {
            background-color: #28a745;
            color: white;
          }

          .btn-success:hover {
            background-color: #218838;
          }

          .btn-danger {
            background-color: #dc3545;
            color: white;
          }

          .btn-danger:hover {
            background-color: #c82333;
          }

          .btn-secondary {
            background-color: #6c757d;
            color: white;
          }

          .btn-secondary:hover {
            background-color: #5a6268;
          }

          form {
            max-width: 600px;
            margin: 0 auto;
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

          .form-group input,
          .form-group select {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ced4da;
            border-radius: 4px;
            box-sizing: border-box;
          }

          .form-group input[type="date"] {
            padding: 8px;
          }

          form button {
            margin-right: 10px;
            margin-top: 15px;
          }

          form button[type="submit"] {
            width: 100%;
          }

          form button[type="button"] {
            width: 100%;
          }

          button + button {
            margin-left: 10px;
          }

          button.btn-primary {
            display: block;
            margin: 20px auto;
            width: 200px;
            font-size: 16px;
          }

          button.btn-primary:hover {
            background-color: #0056b3;
          }

          .action-buttons {
            display: flex;
            gap: 8px;
          }

          .action-buttons .btn {
            flex: 1;
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
        <div className="container">
          <h2>Gestion des Matchs</h2>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>Équipe A</th>
                <th>Équipe B</th>
                <th>Date</th>
                <th>Score A</th>
                <th>Score B</th>
                <th>Tournoi</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match) => (
                <tr key={match.id}>
                  <td>{match.equipeA.nom}</td>
                  <td>{match.equipeB.nom}</td>
                  <td>{new Date(match.date).toLocaleDateString()}</td>
                  <td>{match.scoreA}</td>
                  <td>{match.scoreB}</td>
                  <td>{match.tournoi.nom}</td>
                  <td>{match.statut}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn btn-primary" onClick={() => editMatch(match)}>
                        Modifier
                      </button>
                      <button className="btn btn-danger" onClick={() => deleteMatch(match.id)}>
                        Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {matchToEdit && (
            <div>
              <h3>{isEditMode ? 'Modifier le Match' : 'Ajouter un Nouveau Match'}</h3>
              <form onSubmit={(e) => { e.preventDefault(); saveMatch(); }}>
                <div className="form-group">
                  <label htmlFor="equipeA">Équipe A</label>
                  <select
                    id="equipeA"
                    className="form-control"
                    value={matchToEdit.equipeA?.id || ''}
                    onChange={(e) =>
                      setMatchToEdit({
                        ...matchToEdit,
                        equipeA: equipes.find((eq) => eq.id === Number(e.target.value)) || null,
                      })
                    }
                    required
                  >
                    <option value="">Sélectionner une équipe</option>
                    {equipes.map((equipe) => (
                      <option key={equipe.id} value={equipe.id}>
                        {equipe.nom}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="equipeB">Équipe B</label>
                  <select
                    id="equipeB"
                    className="form-control"
                    value={matchToEdit.equipeB?.id || ''}
                    onChange={(e) =>
                      setMatchToEdit({
                        ...matchToEdit,
                        equipeB: equipes.find((eq) => eq.id === Number(e.target.value)) || null,
                      })
                    }
                    required
                  >
                    <option value="">Sélectionner une équipe</option>
                    {equipes.map((equipe) => (
                      <option key={equipe.id} value={equipe.id}>
                        {equipe.nom}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    id="date"
                    type="date"
                    className="form-control"
                    value={matchToEdit.date ? new Date(matchToEdit.date).toISOString().split('T')[0] : ''}
                    onChange={(e) => setMatchToEdit({ ...matchToEdit, date: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="scoreA">Score A</label>
                  <input
                    id="scoreA"
                    type="number"
                    className="form-control"
                    value={matchToEdit.scoreA || ''}
                    onChange={(e) => setMatchToEdit({ ...matchToEdit, scoreA: Number(e.target.value) })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="scoreB">Score B</label>
                  <input
                    id="scoreB"
                    type="number"
                    className="form-control"
                    value={matchToEdit.scoreB || ''}
                    onChange={(e) => setMatchToEdit({ ...matchToEdit, scoreB: Number(e.target.value) })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tournoi">Tournoi</label>
                  <select
                    id="tournoi"
                    className="form-control"
                    value={matchToEdit.tournoi?.id || ''}
                    onChange={(e) =>
                      setMatchToEdit({
                        ...matchToEdit,
                        tournoi: tournois.find((t) => t.id === Number(e.target.value)) || null,
                      })
                    }
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

                <div className="form-group">
                  <label htmlFor="statut">Statut</label>
                  <select
                    id="statut"
                    className="form-control"
                    value={matchToEdit.statut || ''}
                    onChange={(e) => setMatchToEdit({ ...matchToEdit, statut: e.target.value })}
                    required
                  >
                    <option value="En attente">En attente</option>
                    <option value="En cours">En cours</option>
                    <option value="Terminé">Terminé</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-success">
                  Enregistrer
                </button>
                <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
                  Annuler
                </button>
              </form>
            </div>
          )}

          <button className="btn btn-primary" onClick={startNewMatch}>
            Ajouter un Nouveau Match
          </button>
        </div>
      </main>
    </div>
  );
};

export default MatchManagement;