/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getAllTournaments, getEquipeById, updateEquipe } from "../api/api"
import Sidebar from "../components/Sidebar"

const EditTeam: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [team, setTeam] = useState({
    nom: "",
    categorie: "",
    tournoi: { id: null as number | null },
  })
  const [tournaments, setTournaments] = useState<any[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      loadTournaments()
      loadTeamDetails(Number(id))
    }
  }, [id])

  const loadTournaments = async () => {
    try {
      const data = await getAllTournaments()
      setTournaments(data)
    } catch (error: any) {
      console.error("Erreur lors du chargement des tournois:", error)
    }
  }

  const loadTeamDetails = async (teamId: number) => {
    try {
      const response = await getEquipeById(teamId)
      setTeam(response)
    } catch (error: any) {
      console.error("Erreur lors du chargement des détails de l'équipe:", error)
    }
  }

  const updateTeam = async (e: React.FormEvent) => {
    e.preventDefault()
    if (id) {
      try {
        await updateEquipe(Number(id), team)
        console.log("Équipe mise à jour:", team)
        navigate("/teams")
      } catch (error: any) {
        console.error(
          "Erreur lors de la mise à jour de l'équipe:",
          error.response ? error.response.data : error.message,
        )
        alert("Erreur lors de la mise à jour de l'équipe. Veuillez réessayer.")
      }
    }
  }

  const cancel = () => {
    navigate("/teams")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 ml-64">
      <Sidebar />
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Modifier l'Équipe
            </h1>
            <p className="text-slate-600 mt-1">Modifiez les informations de l'équipe</p>
          </div>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
            <h2 className="text-xl font-semibold">Informations de l'équipe</h2>
          </div>

          <div className="p-8">
            <form onSubmit={updateTeam} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="nom" className="block text-sm font-medium text-slate-700">
                  Nom de l'Équipe
                </label>
                <input
                  id="nom"
                  type="text"
                  value={team.nom}
                  onChange={(e) => setTeam({ ...team, nom: e.target.value })}
                  className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                  className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                  value={team.tournoi.id?.toString() || ""}
                  onChange={(e) => setTeam({ ...team, tournoi: { id: Number(e.target.value) } })}
                  className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                >
                  <option value="">Sélectionner un tournoi</option>
                  {tournaments.map((tournament) => (
                    <option key={tournament.id} value={tournament.id.toString()}>
                      {tournament.nom}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  className="flex-1 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mettre à jour l'Équipe
                </button>
                <button
                  type="button"
                  onClick={cancel}
                  className="flex-1 h-12 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl transition-all duration-200 bg-transparent flex items-center justify-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTeam

