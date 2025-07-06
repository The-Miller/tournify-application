/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import { fetchAllUtilisateurs, updateUtilisateur, deleteUtilisateur, createUtilisateurWithRole } from '../api/api';
// import './Dashboard.css';

// const UserManagement: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [userToEdit, setUserToEdit] = useState<any>(null);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const navigate = useNavigate();
//   const role = localStorage.getItem('role');

//   useEffect(() => {
//     if (role !== 'ADMINISTRATEUR') {
//       navigate('/dashboard-admin');
//     } else {
//       loadUsers();
//     }
//   }, [role, navigate]);

//   const loadUsers = () => {
//     fetchAllUtilisateurs()
//       .then((response) => setUsers(response))
//       .catch((error) => console.error('Erreur lors du chargement des utilisateurs:', error));
//   };

//   const startNewUser = () => {
//     setIsEditMode(false);
//     setUserToEdit({ nom: '', prenom: '', email: '', password: '', role: '' });
//   };

//   const editUser = (user: any) => {
//     setIsEditMode(true);
//     setUserToEdit({ ...user });
//   };

//   const saveUser = () => {
//     if (isEditMode && userToEdit?.id) {
//       updateUtilisateur(userToEdit.id, userToEdit)
//         .then(() => {
//           loadUsers();
//           setUserToEdit(null);
//         })
//         .catch((error) => console.error('Erreur lors de la mise à jour:', error));
//     } else {
//       console.log('Données envoyées à createUtilisateurWithRole:', userToEdit);
//       createUtilisateurWithRole(userToEdit)
//         .then(() => {
//           loadUsers();
//           setUserToEdit(null);
//         })
//         .catch((error) => console.error('Erreur lors de l\'ajout:', error.response ? error.response.data : error.message));
//     }
//   };

//   const deleteUser = (id: number) => {
//     if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
//       deleteUtilisateur(id)
//         .then(() => loadUsers())
//         .catch((error) => console.error('Erreur lors de la suppression:', error));
//     }
//   };

//   const cancelEdit = () => {
//     setUserToEdit(null);
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <main className="content">
//         {role === 'ADMINISTRATEUR' && (
//           <div className="user-management">
//             <h2>Gestion des Utilisateurs</h2>
//             <table className="user-table">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Nom</th>
//                   <th>Prénom</th>
//                   <th>Email</th>
//                   <th>Role</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user) => (
//                   <tr key={user.id}>
//                     <td>{user.id}</td>
//                     <td>{user.nom}</td>
//                     <td>{user.prenom}</td>
//                     <td>{user.email}</td>
//                     <td>{user.role}</td>
//                     <td>
//                       <button className="btn btn-primary" onClick={() => editUser(user)}>
//                         Modifier
//                       </button>
//                       <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>
//                         Supprimer
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <button className="btn btn-primary" onClick={startNewUser}>
//               Ajouter un nouvel utilisateur
//             </button>
//             {userToEdit && (
//               <div>
//                 <h3>{isEditMode ? 'Modifier' : 'Ajouter'} un utilisateur</h3>
//                 <form onSubmit={(e) => { e.preventDefault(); saveUser(); }}>
//                   <div className="form-group">
//                     <label>Nom:
//                       <input value={userToEdit.nom} onChange={(e) => setUserToEdit({ ...userToEdit, nom: e.target.value })} name="nom" required />
//                     </label>
//                   </div>
//                   <div className="form-group">
//                     <label>Prénom:
//                       <input value={userToEdit.prenom} onChange={(e) => setUserToEdit({ ...userToEdit, prenom: e.target.value })} name="prenom" required />
//                     </label>
//                   </div>
//                   <div className="form-group">
//                     <label>Email:
//                       <input value={userToEdit.email} onChange={(e) => setUserToEdit({ ...userToEdit, email: e.target.value })} name="email" required />
//                     </label>
//                   </div>
//                   <div className="form-group">
//                     <label>Password:
//                       <input type="password" value={userToEdit.password} onChange={(e) => setUserToEdit({ ...userToEdit, password: e.target.value })} name="password" required />
//                     </label>
//                   </div>
//                   <div className="form-group">
//                     <label>Role:
//                       <select value={userToEdit.role} onChange={(e) => setUserToEdit({ ...userToEdit, role: e.target.value })} name="role" required>
//                         <option value="ADMINISTRATEUR">ADMINISTRATEUR</option>
//                         <option value="GERANT">GERANT</option>
//                         <option value="COMMUNITY_MANAGER">COMMUNITY_MANAGER</option>
//                         <option value="USER">USER</option>
//                       </select>
//                     </label>
//                   </div>
//                   <button type="submit">{isEditMode ? 'Mettre à jour' : 'Ajouter'}</button>
//                   <button type="button" onClick={cancelEdit}>Annuler</button>
//                 </form>
//               </div>
//             )}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default UserManagement;

"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { fetchAllUtilisateurs, updateUtilisateur, deleteUtilisateur, createUtilisateurWithRole } from "../api/api"
import Sidebar from "../components/Sidebar"

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<any[]>([])
  const [userToEdit, setUserToEdit] = useState<any>(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const navigate = useNavigate()
  const role = localStorage.getItem("role")

  useEffect(() => {
    if (role !== "ADMINISTRATEUR") {
      navigate("/dashboard-admin")
    } else {
      loadUsers()
    }
  }, [role, navigate])

  const loadUsers = () => {
    fetchAllUtilisateurs()
      .then((response) => setUsers(response))
      .catch((error) => console.error("Erreur lors du chargement des utilisateurs:", error))
  }

  const startNewUser = () => {
    setIsEditMode(false)
    setUserToEdit({ nom: "", prenom: "", email: "", password: "", role: "" })
  }

  const editUser = (user: any) => {
    setIsEditMode(true)
    setUserToEdit({ ...user })
  }

  const saveUser = () => {
    if (isEditMode && userToEdit?.id) {
      updateUtilisateur(userToEdit.id, userToEdit)
        .then(() => {
          loadUsers()
          setUserToEdit(null)
        })
        .catch((error) => console.error("Erreur lors de la mise à jour:", error))
    } else {
      console.log("Données envoyées à createUtilisateurWithRole:", userToEdit)
      createUtilisateurWithRole(userToEdit)
        .then(() => {
          loadUsers()
          setUserToEdit(null)
        })
        .catch((error) =>
          console.error("Erreur lors de l'ajout:", error.response ? error.response.data : error.message),
        )
    }
  }

  const deleteUser = (id: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      deleteUtilisateur(id)
        .then(() => loadUsers())
        .catch((error) => console.error("Erreur lors de la suppression:", error))
    }
  }

  const cancelEdit = () => {
    setUserToEdit(null)
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "ADMINISTRATEUR":
        return "bg-red-100 text-red-800"
      case "GERANT":
        return "bg-blue-100 text-blue-800"
      case "COMMUNITY_MANAGER":
        return "bg-green-100 text-green-800"
      case "USER":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (role !== "ADMINISTRATEUR") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 ml-64 flex items-center justify-center">
        <Sidebar/>
        <div className="max-w-md p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-center">
            <svg className="h-4 w-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-red-800">Accès refusé. Seuls les administrateurs peuvent accéder à cette page.</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 ml-64">
      <Sidebar />
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Gestion des Utilisateurs
            </h1>
            <p className="text-slate-600 mt-1">Gérez les comptes utilisateurs et leurs rôles</p>
          </div>
          <button
            onClick={startNewUser}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nouvel Utilisateur
          </button>
        </div>

        {!userToEdit ? (
          /* Users List */
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
              <h2 className="text-xl font-bold flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Liste des Utilisateurs
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nom</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Prénom</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rôle</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.id}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.nom}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{user.prenom}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{user.email}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}
                        >
                          <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5-6a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => editUser(user)}
                            className="p-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => deleteUser(user.id)}
                            className="p-2 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors"
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* User Form */
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
              <h2 className="text-xl font-semibold">
                {isEditMode ? "Modifier Utilisateur" : "Ajouter un Utilisateur"}
              </h2>
            </div>

            <div className="p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  saveUser()
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nom" className="block text-sm font-medium text-slate-700 flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Nom
                    </label>
                    <input
                      id="nom"
                      value={userToEdit.nom}
                      onChange={(e) => setUserToEdit({ ...userToEdit, nom: e.target.value })}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Nom de famille"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="prenom" className="block text-sm font-medium text-slate-700 flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Prénom
                    </label>
                    <input
                      id="prenom"
                      value={userToEdit.prenom}
                      onChange={(e) => setUserToEdit({ ...userToEdit, prenom: e.target.value })}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Prénom"
                      required
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={userToEdit.email}
                      onChange={(e) => setUserToEdit({ ...userToEdit, email: e.target.value })}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      Mot de passe
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={userToEdit.password}
                      onChange={(e) => setUserToEdit({ ...userToEdit, password: e.target.value })}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="role" className="block text-sm font-medium text-slate-700 flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5-6a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Rôle
                    </label>
                    <select
                      id="role"
                      value={userToEdit.role}
                      onChange={(e) => setUserToEdit({ ...userToEdit, role: e.target.value })}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      required
                    >
                      <option value="">Sélectionner un rôle</option>
                      <option value="ADMINISTRATEUR">ADMINISTRATEUR</option>
                      <option value="GERANT">GERANT</option>
                      <option value="COMMUNITY_MANAGER">COMMUNITY_MANAGER</option>
                      <option value="USER">USER</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="submit"
                    className="flex-1 h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    {isEditMode ? "Mettre à jour" : "Ajouter"}
                  </button>
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="flex-1 h-12 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl transition-all duration-200 bg-transparent"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserManagement

