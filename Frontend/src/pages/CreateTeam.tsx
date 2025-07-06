/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getAllTournaments, createEquipe } from '../api/api'; // Importation depuis api.js

// const CreateTeam: React.FC = () => {
//   const [team, setTeam] = useState({
//     nom: '',
//     categorie: '',
//     tournoiId: null as number | null,
//   });
//   const [tournois, setTournois] = useState<any[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     loadTournaments();
//   }, []);

//   const loadTournaments = async () => {
//     try {
//       const data = await getAllTournaments();
//       setTournois(data);
//       console.log('Tournois chargés:', data);
//     } catch (error: any) { // Typage explicite de 'error' comme 'any'
//       console.error('Erreur lors du chargement des tournois:', error);
//     }
//   };

//   const createTeam = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!team.nom || !team.categorie || !team.tournoiId) {
//       alert('Tous les champs sont obligatoires.');
//       return;
//     }

//     const newTeam = {
//       nom: team.nom,
//       categorie: team.categorie,
//       tournoi: { id: team.tournoiId },
//     };

//     try {
//       const response = await createEquipe(newTeam);
//       console.log('Équipe créée:', response);
//       navigate('teams');
//     } catch (error: any) { // Typage explicite de 'error' comme 'any'
//       console.error('Erreur lors de la création de l\'équipe:', error.response ? error.response.data : error.message);
//       alert('Erreur lors de la création de l\'équipe. Veuillez réessayer.');
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <style>
//         {`
//           .dashboard-container {
//             display: flex;
//             height: 100vh;
//           }

//           .sidebar {
//             width: 250px;
//             background-color: #6BA7E2;
//             color: white;
//             padding: 20px;
//           }

//           .logo-container {
//             display: flex;
//             align-items: center;
//             margin-bottom: 30px;
//           }

//           .logo {
//             width: 100px;
//             margin-right: 80px;
//           }

//           .sidebar-menu ul {
//             list-style: none;
//             padding: 0;
//           }

//           .sidebar-menu li {
//             margin-bottom: 15px;
//           }

//           .sidebar-menu a {
//             color: white;
//             text-decoration: none;
//             display: flex;
//             align-items: center;
//           }

//           .sidebar-menu a.active {
//             font-weight: bold;
//           }

//           .sidebar-menu i {
//             margin-right: 10px;
//           }

//           .content {
//             flex-grow: 1;
//             padding: 30px;
//             background-color: #f5f5f5;
//             height: calc(100vh - 60px);
//             overflow-y: auto;
//           }

//           .create-team-container {
//             max-width: 600px;
//             margin: 0 auto;
//             padding: 20px;
//             background-color: #f8f9fa;
//             border-radius: 8px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           }

//           .create-team-container h2 {
//             text-align: center;
//             color: #333;
//             margin-bottom: 20px;
//           }

//           .form-group {
//             margin-bottom: 15px;
//           }

//           .form-group label {
//             display: block;
//             margin-bottom: 5px;
//             font-weight: bold;
//             color: #333;
//           }

//           .form-control {
//             width: 100%;
//             padding: 10px;
//             font-size: 16px;
//             border: 1px solid #ced4da;
//             border-radius: 4px;
//             box-sizing: border-box;
//           }

//           button.btn-primary {
//             display: block;
//             width: 100%;
//             padding: 10px;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             border-radius: 4px;
//             cursor: pointer;
//             font-size: 16px;
//             margin-top: 15px;
//           }

//           button.btn-primary:hover {
//             background-color: #0056b3;
//           }
//         `}
//       </style>
//       <aside className="sidebar">
//         <div className="logo-container">
//           {/* <img src="assets/logo.png" alt="Tournify Logo" className="logo"> */}
//           {/* <h2>Tournify</h2> */}
//         </div>
//         <nav className="sidebar-menu">
//           <ul>
//             <li><a href="/admin/users"><i className="fa fa-user"></i> Gestion des Utilisateurs</a></li>
//             <li><a href="/dashboard-admin"><i className="fa fa-trophy"></i> Gestion des Tournois</a></li>
//             <li><a href="/admin/teams"><i className="fa fa-users"></i> Gestion des Équipes</a></li>
//             <li><a href="/gestion-matchs"><i className="fa fa-life-ring"></i> Matchs & Résultats</a></li>
//             <li><a href="/admin/results"><i className="fa fa-bar-chart"></i> Classements équipes/joueurs</a></li>
//           </ul>
//         </nav>
//       </aside>

//       <main className="content">
//         <div className="create-team-container">
//           <h2>Ajouter une Nouvelle Équipe</h2>
//           <form onSubmit={createTeam}>
//             <div className="form-group">
//               <label>Nom de l'Équipe</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={team.nom}
//                 onChange={(e) => setTeam({ ...team, nom: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Catégorie</label>
//               <select
//                 className="form-control"
//                 value={team.categorie}
//                 onChange={(e) => setTeam({ ...team, categorie: e.target.value })}
//                 required
//               >
//                 <option value="Categorie">Catégorie</option>
//                 <option value="Football">Football</option>
//                 <option value="Basketball">Basketball</option>
//                 <option value="Handball">Handball</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Tournoi</label>
//               <select
//                 className="form-control"
//                 value={team.tournoiId || ''}
//                 onChange={(e) => setTeam({ ...team, tournoiId: Number(e.target.value) })}
//                 required
//               >
//                 <option value="">Sélectionner un tournoi</option>
//                 {tournois.map((tournoi) => (
//                   <option key={tournoi.id} value={tournoi.id}>
//                     {tournoi.nom}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Créer Équipe
//             </button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CreateTeam;

"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getAllTournaments, createEquipe } from "../api/api"
import Sidebar from "../components/Sidebar"

const CreateTeam: React.FC = () => {
  const [team, setTeam] = useState({
    nom: "",
    categorie: "",
    tournoiId: null as number | null,
  })
  const [tournois, setTournois] = useState<any[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    loadTournaments()
  }, [])

  const loadTournaments = async () => {
    try {
      const data = await getAllTournaments()
      setTournois(data)
      console.log("Tournois chargés:", data)
    } catch (error: any) {
      console.error("Erreur lors du chargement des tournois:", error)
    }
  }

  const createTeam = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!team.nom || !team.categorie || !team.tournoiId) {
      alert("Tous les champs sont obligatoires.")
      return
    }

    const newTeam = {
      nom: team.nom,
      categorie: team.categorie,
      tournoi: { id: team.tournoiId },
    }

    try {
      const response = await createEquipe(newTeam)
      console.log("Équipe créée:", response)
      navigate("/teams")
    } catch (error: any) {
      console.error("Erreur lors de la création de l'équipe:", error.response ? error.response.data : error.message)
      alert("Erreur lors de la création de l'équipe. Veuillez réessayer.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 ml-64">
      <Sidebar />
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Créer une Nouvelle Équipe
            </h1>
            <p className="text-slate-600 mt-1">Ajoutez une nouvelle équipe au tournoi</p>
          </div>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
            <h2 className="text-xl font-semibold flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Nouvelle Équipe
            </h2>
          </div>

          <div className="p-8">
            <form onSubmit={createTeam} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="nom" className="block text-sm font-medium text-slate-700">
                  Nom de l'Équipe
                </label>
                <input
                  id="nom"
                  type="text"
                  value={team.nom}
                  onChange={(e) => setTeam({ ...team, nom: e.target.value })}
                  className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Entrez le nom de l'équipe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="categorie" className="block text-sm font-medium text-slate-700">
                  Catégorie
                </label>
                <select
                  id="categorie"
                  value={team.categorie}
                  onChange={(e) => setTeam({ ...team, categorie: e.target.value })}
                  className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  required
                >
                  <option value="">Sélectionner une catégorie</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Handball">Handball</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="tournoi" className="block text-sm font-medium text-slate-700">
                  Tournoi
                </label>
                <select
                  id="tournoi"
                  value={team.tournoiId?.toString() || ""}
                  onChange={(e) => setTeam({ ...team, tournoiId: Number(e.target.value) })}
                  className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  required
                >
                  <option value="">Sélectionner un tournoi</option>
                  {tournois.map((tournoi) => (
                    <option key={tournoi.id} value={tournoi.id.toString()}>
                      {tournoi.nom}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Créer l'Équipe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTeam

