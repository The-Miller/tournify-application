import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TeamManagement: React.FC = () => {
  const [teams, setTeams] = useState<any[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  const [members, setMembers] = useState<any[]>([]);
  const [newMember, setNewMember] = useState({ nom: '', prenom: '', equipeId: null as number | null });
  const [editingMember, setEditingMember] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = () => {
    axios.get('http://localhost:8080/api/teams')
      .then((response) => {
        const updatedTeams = response.data.map((team: any) => ({
          ...team,
          tournoiNom: team.tournoi && typeof team.tournoi === 'object' ? team.tournoi.nom : 'N/A',
        }));
        setTeams(updatedTeams);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des équipes:', error);
      });
  };

  const navigateToEditTeam = (teamId: number) => {
    navigate(`/edit-team/${teamId}`);
  };

  const deleteTeam = (teamId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette équipe ?')) {
      axios.delete(`http://localhost:8080/api/teams/${teamId}`)
        .then(() => {
          console.log('Équipe supprimée');
          loadTeams();
        })
        .catch((error) => {
          console.error('Erreur lors de la suppression de l\'équipe:', error);
        });
    }
  };

  const viewMembers = (teamId: number) => {
    setSelectedTeam(teamId);
    axios.get(`http://localhost:8080/api/teams/${teamId}/members`)
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des membres:', error);
      });
  };

  const addMember = () => {
    if (selectedTeam && newMember.nom && newMember.prenom) {
      const memberData = { ...newMember, equipeId: selectedTeam };
      axios.post(`http://localhost:8080/api/teams/${selectedTeam}/members`, memberData)
        .then((response) => {
          console.log('Membre ajouté:', response.data);
          setMembers([...members, response.data]);
          setNewMember({ nom: '', prenom: '', equipeId: null });
        })
        .catch((error) => {
          console.error('Erreur lors de l\'ajout du membre:', error);
        });
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  const editMember = (memberId: number) => {
    const member = members.find((m) => m.id === memberId);
    if (member) {
      setEditingMember({ ...member });
    } else {
      console.error('Membre non trouvé');
    }
  };

  const updateMember = () => {
    if (editingMember && editingMember.id) {
      axios.put(`http://localhost:8080/api/teams/${selectedTeam}/members/${editingMember.id}`, editingMember)
        .then(() => {
          console.log('Membre modifié');
          loadTeams();
          setEditingMember(null);
        })
        .catch((error) => {
          console.error('Erreur lors de la modification du membre:', error);
        });
    }
  };

  const deleteMember = (memberId: number) => {
    axios.delete(`http://localhost:8080/api/teams/${selectedTeam}/members/${memberId}`)
      .then(() => {
        console.log('Membre supprimé');
        setMembers(members.filter((m) => m.id !== memberId));
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du membre:', error);
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

          .team-management-container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .teams-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }

          .teams-table th,
          .teams-table td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }

          .teams-table td button.btn-primary {
            background-color: #007bff;
            color: white;
            border: none;
            margin-right: 10px;
          }

          .members-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            margin-bottom: 20px;
          }

          .members-table th,
          .members-table td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }

          .members-table th {
            background-color: #f0f0f0;
            font-weight: bold;
          }

          .members-table td button {
            margin-right: 5px;
          }

          .members-table td button.btn {
            padding: 5px 10px;
            font-size: 0.9rem;
            border-radius: 4px;
            cursor: pointer;
          }

          .members-table td button.btn-primary {
            background-color: #007bff;
            color: white;
            border: none;
          }

          .members-table td button.btn-danger {
            background-color: #dc3545;
            color: white;
            border: none;
          }

          .team-management-container div {
            margin-bottom: 20px;
          }

          .team-management-container label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
          }

          .team-management-container input[type="text"] {
            padding: 8px;
            width: 100%;
            max-width: 400px;
            border-radius: 4px;
            border: 1px solid #ccc;
            margin-bottom: 10px;
          }

          .team-management-container h4 {
            margin-top: 30px;
            font-size: 18px;
            color: #333;
          }

          .team-management-container button {
            padding: 10px 20px;
            font-size: 1rem;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
          }

          .team-management-container button.btn-success {
            background-color: #28a745;
          }

          .team-management-container button.btn-primary {
            background-color: #007bff;
          }

          .team-management-container button:hover {
            opacity: 0.9;
          }

          .team-management-container button.btn-success:hover {
            background-color: #218838;
          }

          .team-management-container button.btn-primary:hover {
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
        <div className="team-management-container">
          <h2>Gestion des Équipes</h2>
          <table className="teams-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nom de l'Équipe</th>
                <th>Catégorie</th>
                <th>Tournoi</th>
                <th>Membres</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id}>
                  <td>{team.id}</td>
                  <td>{team.nom}</td>
                  <td>{team.categorie}</td>
                  <td>{team.tournoiNom}</td>
                  <td>
                    <button className="btn btn-info" onClick={() => viewMembers(team.id)}>
                      Consulter
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-primary" onClick={() => navigateToEditTeam(team.id)}>
                      Modifier
                    </button>
                    <button className="btn btn-danger" onClick={() => deleteTeam(team.id)}>
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-success" onClick={() => navigate('/create-team')}>
            Ajouter une nouvelle Équipe
          </button>

          {selectedTeam && (
            <div>
              <h3>Membres de l'Équipe</h3>
              <table className="members-table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr key={member.id}>
                      <td>{member.id}</td>
                      <td>{member.nom}</td>
                      <td>{member.prenom}</td>
                      <td>
                        <button className="btn btn-primary" onClick={() => editMember(member.id)}>
                          Modifier
                        </button>
                        <button className="btn btn-danger" onClick={() => deleteMember(member.id)}>
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h4>Ajouter un Nouveau Membre</h4>
              <div>
                <label>Nom</label>
                <input
                  type="text"
                  value={newMember.nom}
                  onChange={(e) => setNewMember({ ...newMember, nom: e.target.value })}
                  required
                />
              </div>
              <div>
                <label>Prénom</label>
                <input
                  type="text"
                  value={newMember.prenom}
                  onChange={(e) => setNewMember({ ...newMember, prenom: e.target.value })}
                  required
                />
              </div>
              <button className="btn btn-success" onClick={addMember}>
                Ajouter Membre
              </button>
            </div>
          )}

          {editingMember && (
            <div>
              <h4>Modifier Membre</h4>
              <div>
                <label>Nom</label>
                <input
                  type="text"
                  value={editingMember.nom}
                  onChange={(e) => setEditingMember({ ...editingMember, nom: e.target.value })}
                  required
                />
              </div>
              <div>
                <label>Prénom</label>
                <input
                  type="text"
                  value={editingMember.prenom}
                  onChange={(e) => setEditingMember({ ...editingMember, prenom: e.target.value })}
                  required
                />
              </div>
              <button className="btn btn-primary" onClick={updateMember}>
                Enregistrer les modifications
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TeamManagement;