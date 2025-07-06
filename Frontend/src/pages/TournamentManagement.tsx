/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import {
  getAllTournaments,
  getTournamentById,
  updateTournament,
  deleteTournament,
  createTournament,
  createUtilisateurWithRole,
} from "../api/api"
import Sidebar from "../components/Sidebar"

const TournamentManagement: React.FC = () => {
  const { id } = useParams<{ id?: string }>()
  const location = useLocation()
  const [tournaments, setTournaments] = useState<any[]>([])
  const [editingTournament, setEditingTournament] = useState<any>(null)
  const [newTournament, setNewTournament] = useState({
    nom: "",
    categorie: "",
    date: "",
  })
  const [communityManager, setCommunityManager] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  useEffect(() => {
    console.log("ID actuel:", id, "Path:", location.pathname); // Débogage
    loadTournaments()
    if (id && !isNaN(Number(id))) {
      loadTournamentDetails(Number(id))
    }
  }, [id, location.pathname])

  const loadTournaments = async () => {
    try {
      const data = await getAllTournaments()
      setTournaments(data)
    } catch (error: any) {
      console.error("Erreur lors du chargement des tournois:", error)
    }
  }

  const loadTournamentDetails = async (tournamentId: number) => {
    try {
      const response = await getTournamentById(tournamentId)
      setEditingTournament(response)
    } catch (error: any) {
      console.error("Erreur lors du chargement des détails du tournoi:", error)
    }
  }

  const createTournamentHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const communityManagerResponse = await createUtilisateurWithRole({
        nom: communityManager.nom,
        prenom: communityManager.prenom,
        email: communityManager.email,
        password: communityManager.password,
        role: "CommunityManager",
      })
      const tournamentResponse = await createTournament({
        nom: newTournament.nom,
        categorie: newTournament.categorie,
        date: newTournament.date,
        communityManagerId: communityManagerResponse.id,
      })
      navigate("/tournaments")
      setNewTournament({ nom: "", categorie: "", date: "" })
      setCommunityManager({ nom: "", prenom: "", email: "", password: "" })
    } catch (error: any) {
      console.error("Erreur lors de la création:", error)
      alert("Erreur lors de la création. Veuillez réessayer.")
    }
  }

  const updateTournamentHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    if (editingTournament && id && !isNaN(Number(id))) {
      try {
        await updateTournament(Number(id), editingTournament)
        navigate("/tournaments")
      } catch (error: any) {
        console.error("Erreur lors de la mise à jour du tournoi:", error)
        alert("Erreur lors de la mise à jour du tournoi. Veuillez réessayer.")
      }
    }
  }

  const deleteTournamentHandler = async (tournamentId: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce tournoi ?")) {
      try {
        await deleteTournament(tournamentId)
        loadTournaments()
      } catch (error: any) {
        console.error("Erreur lors de la suppression du tournoi:", error)
      }
    }
  }

  const cancelEdit = () => {
    navigate("/tournaments")
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Football":
        return "bg-green-100 text-green-800"
      case "Basketball":
        return "bg-orange-100 text-orange-800"
      case "Handball":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const isCreateMode = location.pathname === "/tournaments/create"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 ml-64">
      <Sidebar />
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Gestion des Tournois
            </h1>
            <p className="text-slate-600 mt-1">Gérez vos tournois et leurs community managers</p>
          </div>
          {!id && !isCreateMode && (
            <button
              onClick={() => navigate("/tournaments/create")}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02]"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Nouveau Tournoi
            </button>
          )}
        </div>

        {isCreateMode || id ? (
          <>
            {/* <div>Debug: ID = {id}, Path = {location.pathname}, isCreateMode = {String(isCreateMode)}</div> Débogage */}
            {/* Tournament Form */}
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
                <h2 className="text-xl font-semibold">
                  {isCreateMode ? "Créer un Nouveau Tournoi" : "Modifier Tournoi"}
                </h2>
              </div>

              <div className="p-8">
                <form
                  onSubmit={isCreateMode ? createTournamentHandler : updateTournamentHandler}
                  className="space-y-8"
                >
                  {/* Tournament Info */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                      <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                      Informations du Tournoi
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nom" className="block text-sm font-medium text-slate-700">
                          Nom du Tournoi
                        </label>
                        <input
                          id="nom"
                          type="text"
                          value={isCreateMode ? newTournament.nom : editingTournament?.nom || ""}
                          onChange={(e) =>
                            isCreateMode
                              ? setNewTournament({ ...newTournament, nom: e.target.value })
                              : setEditingTournament({ ...editingTournament, nom: e.target.value })
                          }
                          className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                          placeholder="Nom du tournoi"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="categorie" className="block text-sm font-medium text-slate-700">
                          Catégorie
                        </label>
                        <select
                          id="categorie"
                          value={isCreateMode ? newTournament.categorie : editingTournament?.categorie || ""}
                          onChange={(e) =>
                            isCreateMode
                              ? setNewTournament({ ...newTournament, categorie: e.target.value })
                              : setEditingTournament({ ...editingTournament, categorie: e.target.value })
                          }
                          className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                          required
                        >
                          <option value="">Sélectionner une catégorie</option>
                          <option value="Football">Football</option>
                          <option value="Basketball">Basketball</option>
                          <option value="Handball">Handball</option>
                        </select>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="date" className="block text-sm font-medium text-slate-700">
                          Date du Tournoi
                        </label>
                        <input
                          id="date"
                          type="date"
                          value={isCreateMode ? newTournament.date : editingTournament?.date || ""}
                          onChange={(e) =>
                            isCreateMode
                              ? setNewTournament({ ...newTournament, date: e.target.value })
                              : setEditingTournament({ ...editingTournament, date: e.target.value })
                          }
                          className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Community Manager Info (only for new tournaments) */}
                  {isCreateMode && (
                    <div className="space-y-6 border-t pt-8">
                      <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                        <svg
                          className="h-5 w-5 mr-2 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        Community Manager
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="cm-nom" className="block text-sm font-medium text-slate-700">
                            Nom
                          </label>
                          <input
                            id="cm-nom"
                            type="text"
                            value={communityManager.nom}
                            onChange={(e) => setCommunityManager({ ...communityManager, nom: e.target.value })}
                            className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                            placeholder="Nom"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="cm-prenom" className="block text-sm font-medium text-slate-700">
                            Prénom
                          </label>
                          <input
                            id="cm-prenom"
                            type="text"
                            value={communityManager.prenom}
                            onChange={(e) => setCommunityManager({ ...communityManager, prenom: e.target.value })}
                            className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                            placeholder="Prénom"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="cm-email" className="block text-sm font-medium text-slate-700">
                            Email
                          </label>
                          <input
                            id="cm-email"
                            type="email"
                            value={communityManager.email}
                            onChange={(e) => setCommunityManager({ ...communityManager, email: e.target.value })}
                            className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                            placeholder="email@example.com"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="cm-password" className="block text-sm font-medium text-slate-700">
                            Mot de passe
                          </label>
                          <input
                            id="cm-password"
                            type="password"
                            value={communityManager.password}
                            onChange={(e) => setCommunityManager({ ...communityManager, password: e.target.value })}
                            className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                            placeholder="••••••••"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-6">
                    <button
                      type="submit"
                      className="flex-1 h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      {isCreateMode ? "Créer Tournoi" : "Mettre à jour le Tournoi"}
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
          </>
        ) : (
          /* Tournament List */
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
              <h2 className="text-xl font-bold flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                Liste des Tournois
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nom</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Catégorie</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tournaments.map((tournament) => (
                    <tr key={tournament.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{tournament.id}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{tournament.nom}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(
                            tournament.categorie,
                          )}`}
                        >
                          {tournament.categorie}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {new Date(tournament.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => navigate(`/tournaments/edit/${tournament.id}`)}
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
                            onClick={() => deleteTournamentHandler(tournament.id)}
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
        )}
      </div>
    </div>
  )
}

export default TournamentManagement