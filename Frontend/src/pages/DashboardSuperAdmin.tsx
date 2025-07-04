/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DashboardSuperAdmin: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [userToEdit, setUserToEdit] = useState<any>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  useEffect(() => {
    if (role !== 'ADMIN') {
      navigate('/dashboard-admin'); // Rediriger si ce n'est pas un ADMIN
    } else {
      loadUsers();
    }
  }, [role, navigate]);

  const loadUsers = () => {
    axios.get('http://localhost:8080/api/utilisateurs')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Erreur lors du chargement des utilisateurs:', error));
  };

  const startNewUser = () => {
    setIsEditMode(false);
    setUserToEdit({ nom: '', prenom: '', email: '', password: '', role: '' });
  };

  const editUser = (user: any) => {
    setIsEditMode(true);
    setUserToEdit({ ...user });
  };

  const saveUser = () => {
    if (isEditMode && userToEdit?.id) {
      axios.put(`http://localhost:8080/api/utilisateurs/${userToEdit.id}`, userToEdit)
        .then(() => {
          loadUsers();
          setUserToEdit(null);
        })
        .catch((error) => console.error('Erreur lors de la mise à jour de l\'utilisateur:', error));
    } else {
      axios.post('http://localhost:8080/api/utilisateurs', userToEdit)
        .then(() => {
          loadUsers();
          setUserToEdit(null);
        })
        .catch((error) => console.error('Erreur lors de l\'ajout de l\'utilisateur:', error));
    }
  };

  const deleteUser = (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      axios.delete(`http://localhost:8080/api/utilisateurs/${id}`)
        .then(() => loadUsers())
        .catch((error) => console.error('Erreur lors de la suppression de l\'utilisateur:', error));
    }
  };

  const cancelEdit = () => {
    setUserToEdit(null);
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

          .user-management {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
          }

          .user-management h2 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
            text-align: center;
          }

          .user-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }

          .user-table th, .user-table td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }

          .user-table th {
            background-color: #6BA7E2;
            color: white;
          }

          .user-table tr:nth-child(even) {
            background-color: #f2f2f2;
          }

          .user-table tr:hover {
            background-color: #ddd;
          }

          .user-table td {
            color: #333;
          }

          .user-table button {
            padding: 8px 12px;
            margin-right: 5px;
            border-radius: 5px;
            cursor: pointer;
          }

          .user-table .btn-primary {
            background-color: #6BA7E2;
            color: white;
            border: none;
          }

          .user-table .btn-primary:hover {
            background-color: #5592cc;
          }

          .user-table .btn-danger {
            background-color: #e74c3c;
            color: white;
            border: none;
          }

          .user-table .btn-danger:hover {
            background-color: #c0392b;
          }

          button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 20px;
          }

          form label {
            font-weight: bold;
            margin-bottom: 5px;
          }

          form input, form select {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }

          form button {
            padding: 10px 15px;
            margin-top: 10px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            font-size: 16px;
          }

          form button[type="submit"] {
            background-color: #6BA7E2;
            color: white;
          }

          form button[type="submit"]:hover {
            background-color: #5592cc;
          }

          form button[type="button"] {
            background-color: #e74c3c;
            color: white;
          }

          form button[type="button"]:hover {
            background-color: #c0392b;
          }

          h3 {
            margin-top: 30px;
            font-size: 20px;
            color: #333;
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
            <li><a href="/admin/users"><i className="fa fa-user"></i> Gestion des Utilisateurs</a></li>
            <li><a href="/dashboard-admin"><i className="fa fa-trophy"></i> Gestion des Tournois</a></li>
            <li><a href="/admin/teams"><i className="fa fa-users"></i> Gestion des Équipes</a></li>
            <li><a href="/gestion-matchs"><i className="fa fa-life-ring"></i> Matchs & Résultats</a></li>
            <li><a href="/admin/results"><i className="fa fa-bar-chart"></i> Classements équipes/joueurs</a></li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        {role === 'ADMIN' && (
          <div className="user-management">
            <h2>Gestion des Utilisateurs</h2>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nom}</td>
                    <td>{user.prenom}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => editUser(user)}>
                        Modifier
                      </button>
                      <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-primary" onClick={startNewUser}>
              Ajouter un nouvel utilisateur
            </button>

            {userToEdit && (
              <div>
                <h3>{isEditMode ? 'Modifier' : 'Ajouter'} un utilisateur</h3>
                <form onSubmit={(e) => { e.preventDefault(); saveUser(); }}>
                  <label>Nom:</label>
                  <input
                    value={userToEdit.nom}
                    onChange={(e) => setUserToEdit({ ...userToEdit, nom: e.target.value })}
                    name="nom"
                    required
                  />
                  <label>Prénom:</label>
                  <input
                    value={userToEdit.prenom}
                    onChange={(e) => setUserToEdit({ ...userToEdit, prenom: e.target.value })}
                    name="prenom"
                    required
                  />
                  <label>Email:</label>
                  <input
                    value={userToEdit.email}
                    onChange={(e) => setUserToEdit({ ...userToEdit, email: e.target.value })}
                    name="email"
                    required
                  />
                  <label>Password:</label>
                  <input
                    type="password"
                    value={userToEdit.password}
                    onChange={(e) => setUserToEdit({ ...userToEdit, password: e.target.value })}
                    name="password"
                    required
                  />
                  <label>Role:</label>
                  <select
                    value={userToEdit.role}
                    onChange={(e) => setUserToEdit({ ...userToEdit, role: e.target.value })}
                    name="role"
                    required
                  >
                    <option value="ADMIN">ADMIN</option>
                    <option value="Administrateur">Administrateur</option>
                    <option value="CommunityManager">CommunityManager</option>
                  </select>
                  <button type="submit">{isEditMode ? 'Mettre à jour' : 'Ajouter'}</button>
                  <button type="button" onClick={cancelEdit}>
                    Annuler
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardSuperAdmin;