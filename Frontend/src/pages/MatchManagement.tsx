/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  getAllEquipes,
  getAllTournaments,
  getAllMatches,
  createMatch,
  updateMatch,
  deleteMatch,
  getMatchById,
} from "../api/api"
import Sidebar from "../components/Sidebar"

const MatchManagement: React.FC = () => {
  const { id } = useParams<{ id?: string }>()
  const [equipes, setEquipes] = useState<any[]>([])
  const [tournois, setTournois] = useState<any[]>([])
  const [matches, setMatches] = useState<any[]>([])
  const [matchToEdit, setMatchToEdit] = useState<any>(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [isLoading, setIsLoading] = useState(false) // Nouvel état pour le chargement
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    loadEquipes()
    loadTournois()
    loadMatches()
    if (id) {
      handleEditMatch()
    }
  }, [id])

  const loadEquipes = async () => {
    try {
      const data = await getAllEquipes()
      setEquipes(data)
    } catch (error: any) {
      console.error("Erreur lors du chargement des équipes:", error)
      setErrorMessage("Erreur lors du chargement des équipes.")
    }
  }

  const loadTournois = async () => {
    try {
      const data = await getAllTournaments()
      setTournois(data)
    } catch (error: any) {
      console.error("Erreur lors du chargement des tournois:", error)
      setErrorMessage("Erreur lors du chargement des tournois.")
    }
  }

  const loadMatches = async () => {
    try {
      const data = await getAllMatches()
      setMatches(data)
    } catch (error: any) {
      console.error("Erreur lors du chargement des matchs:", error)
      setErrorMessage("Erreur lors du chargement des matchs.")
    }
  }

  const startNewMatch = () => {
    setIsEditMode(false)
    setMatchToEdit({
      equipeA: null,
      equipeB: null,
      date: "",
      scoreA: 0,
      scoreB: 0,
      tournoi: null,
      statut: "En attente",
    })
    setErrorMessage(null)
    navigate("/matches/edit")
  }

  const handleEditMatch = async () => {
    if (!id) return
    setIsLoading(true)
    try {
      const match = await getMatchById(Number(id))
      setIsEditMode(true)
      setMatchToEdit(match) // Pré-remplir avec les données récupérées
      setErrorMessage(null)
      navigate(`/matches/edit/${id}`)
    } catch (error: any) {
      console.error("Erreur lors du chargement du match:", error)
      setErrorMessage("Erreur lors du chargement du match.")
      setMatchToEdit({
        id: Number(id),
        equipeA: null,
        equipeB: null,
        date: "",
        scoreA: 0,
        scoreB: 0,
        tournoi: null,
        statut: "En attente",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const editMatch = (match?: any) => {
    setIsEditMode(!!match?.id)
    if (match?.id) {
      setMatchToEdit(match)
      navigate(`/matches/edit/${match.id}`)
    } else {
      setMatchToEdit({
        equipeA: null,
        equipeB: null,
        date: "",
        scoreA: 0,
        scoreB: 0,
        tournoi: null,
        statut: "En attente",
      })
      navigate("/matches/edit")
    }
    setErrorMessage(null)
  }

  const saveMatch = async () => {
    try {
      if (isEditMode && matchToEdit?.id) {
        await updateMatch(matchToEdit.id, matchToEdit)
      } else {
        await createMatch(matchToEdit)
      }
      loadMatches()
      setMatchToEdit(null)
      navigate("/matches")
      setErrorMessage(null)
    } catch (error: any) {
      console.error(
        "Erreur lors de la création/mise à jour du match:",
        error.response ? error.response.data : error.message,
      )
      setErrorMessage("Erreur lors de la création/mise à jour du match.")
    }
  }

  const cancelEdit = () => {
    setMatchToEdit(null)
    setErrorMessage(null)
    navigate("/matches")
  }

  const deleteMatchHandler = async (matchId: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce match ?")) {
      try {
        await deleteMatch(matchId)
        await loadMatches()
        navigate("/matches")
        setErrorMessage(null)
      } catch (error: any) {
        console.error("Erreur lors de la suppression du match:", error.response ? error.response.data : error.message)
        setErrorMessage("Erreur lors de la suppression du match: " + (error.response?.data?.message || error.message))
      }
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En attente":
        return "bg-yellow-100 text-yellow-800"
      case "En cours":
        return "bg-blue-100 text-blue-800"
      case "Terminé":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 ml-64 flex items-center justify-center">
        <div className="text-xl text-gray-600">Chargement...</div>
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
              Gestion des Matchs
            </h1>
            <p className="text-slate-600 mt-1">Planifiez et gérez les matchs de vos tournois</p>
          </div>
          {!id && (
            <button
              onClick={startNewMatch}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02]"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Nouveau Match
            </button>
          )}
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center">
              <svg className="h-4 w-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-red-800">{errorMessage}</span>
            </div>
          </div>
        )}

        {!id && !matchToEdit ? (
          /* Matches List */
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
              <h2 className="text-xl font-bold flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                Liste des Matchs
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Équipe A</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Équipe B</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Score</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tournoi</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Statut</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {matches.map((match) => (
                    <tr key={match.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{match.equipeA.nom}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{match.equipeB.nom}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{new Date(match.date).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-sm font-mono font-bold text-blue-600">
                        {match.scoreA} - {match.scoreB}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{match.tournoi.nom}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(match.statut)}`}
                        >
                          {match.statut}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => editMatch(match)}
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
                            onClick={() => deleteMatchHandler(match.id)}
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
          /* Match Form */
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
              <h2 className="text-xl font-semibold">{isEditMode ? "Modifier le Match" : "Ajouter un Nouveau Match"}</h2>
            </div>

            <div className="p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  saveMatch()
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Équipe A */}
                  <div className="space-y-2">
                    <label htmlFor="equipeA" className="block text-sm font-medium text-slate-700 flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Équipe A
                    </label>
                    <select
                      id="equipeA"
                      value={matchToEdit?.equipeA?.id?.toString() || ""}
                      onChange={(e) =>
                        setMatchToEdit({
                          ...matchToEdit,
                          equipeA: equipes.find((eq) => eq.id === Number(e.target.value)) || null,
                        })
                      }
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      required
                    >
                      <option value="">Sélectionner l'équipe A</option>
                      {equipes.map((equipe) => (
                        <option key={equipe.id} value={equipe.id.toString()}>
                          {equipe.nom}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Équipe B */}
                  <div className="space-y-2">
                    <label htmlFor="equipeB" className="block text-sm font-medium text-slate-700 flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Équipe B
                    </label>
                    <select
                      id="equipeB"
                      value={matchToEdit?.equipeB?.id?.toString() || ""}
                      onChange={(e) =>
                        setMatchToEdit({
                          ...matchToEdit,
                          equipeB: equipes.find((eq) => eq.id === Number(e.target.value)) || null,
                        })
                      }
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      required
                    >
                      <option value="">Sélectionner l'équipe B</option>
                      {equipes.map((equipe) => (
                        <option key={equipe.id} value={equipe.id.toString()}>
                          {equipe.nom}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label htmlFor="date" className="block text-sm font-medium text-slate-700 flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Date du Match
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={matchToEdit?.date ? new Date(matchToEdit.date).toISOString().split("T")[0] : ""}
                      onChange={(e) => setMatchToEdit({ ...matchToEdit, date: e.target.value })}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      required
                    />
                  </div>

                  {/* Tournoi */}
                  <div className="space-y-2">
                    <label htmlFor="tournoi" className="block text-sm font-medium text-slate-700 flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                      Tournoi
                    </label>
                    <select
                      id="tournoi"
                      value={matchToEdit?.tournoi?.id?.toString() || ""}
                      onChange={(e) =>
                        setMatchToEdit({
                          ...matchToEdit,
                          tournoi: tournois.find((t) => t.id === Number(e.target.value)) || null,
                        })
                      }
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

                  {/* Score A */}
                  <div className="space-y-2">
                    <label htmlFor="scoreA" className="block text-sm font-medium text-slate-700">
                      Score Équipe A
                    </label>
                    <input
                      id="scoreA"
                      type="number"
                      value={matchToEdit?.scoreA || ""}
                      onChange={(e) => setMatchToEdit({ ...matchToEdit, scoreA: Number(e.target.value) })}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      min="0"
                    />
                  </div>

                  {/* Score B */}
                  <div className="space-y-2">
                    <label htmlFor="scoreB" className="block text-sm font-medium text-slate-700">
                      Score Équipe B
                    </label>
                    <input
                      id="scoreB"
                      type="number"
                      value={matchToEdit?.scoreB || ""}
                      onChange={(e) => setMatchToEdit({ ...matchToEdit, scoreB: Number(e.target.value) })}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      min="0"
                    />
                  </div>

                  {/* Statut */}
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="statut" className="block text-sm font-medium text-slate-700">
                      Statut du Match
                    </label>
                    <select
                      id="statut"
                      value={matchToEdit?.statut || ""}
                      onChange={(e) => setMatchToEdit({ ...matchToEdit, statut: e.target.value })}
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      required
                    >
                      <option value="">Sélectionner le statut</option>
                      <option value="En attente">En attente</option>
                      <option value="En cours">En cours</option>
                      <option value="Terminé">Terminé</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6">
                  <button
                    type="submit"
                    className="flex-1 h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Enregistrer
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

export default MatchManagement