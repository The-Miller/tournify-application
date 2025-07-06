/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */

// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import {
//   getAllEquipes,
//   getTeamMembers,
//   deleteEquipe,
//   deleteTeamMember,
//   addMemberToTeam,
// } from "../api/api"
// import Sidebar from "../components/Sidebar"

// const TeamManagement: React.FC = () => {
//   const [teams, setTeams] = useState<any[]>([])
//   const [selectedTeam, setSelectedTeam] = useState<number | null>(null)
//   const [members, setMembers] = useState<any[]>([])
//   const [newMember, setNewMember] = useState({ nom: "", prenom: "" }) // État pour le nouveau membre
//   const navigate = useNavigate()

//   useEffect(() => {
//     loadTeams()
//   }, [])

//   const loadTeams = async () => {
//     try {
//       const data = await getAllEquipes()
//       const updatedTeams = data.map((team: any) => ({
//         ...team,
//         tournoiNom: team.tournoi && typeof team.tournoi === "object" ? team.tournoi.nom : "N/A",
//       }))
//       setTeams(updatedTeams)
//     } catch (error: any) {
//       console.error("Erreur lors du chargement des équipes:", error)
//     }
//   }

//   const loadMembers = async (teamId: number) => {
//     setSelectedTeam(teamId)
//     try {
//       const data = await getTeamMembers(teamId)
//       setMembers(data)
//     } catch (error: any) {
//       console.error("Erreur lors du chargement des membres:", error)
//     }
//   }

//   const deleteTeam = async (teamId: number) => {
//     if (window.confirm("Êtes-vous sûr de vouloir supprimer cette équipe ?")) {
//       try {
//         await deleteEquipe(teamId)
//         setTeams(teams.filter((team) => team.id !== teamId))
//         if (selectedTeam === teamId) {
//           setSelectedTeam(null)
//           setMembers([])
//           setNewMember({ nom: "", prenom: "" }) // Réinitialiser le formulaire
//         }
//       } catch (error: any) {
//         console.error("Erreur lors de la suppression de l'équipe:", error)
//       }
//     }
//   }

//   const deleteMember = async (memberId: number) => {
//     if (selectedTeam && window.confirm("Êtes-vous sûr de vouloir supprimer ce membre ?")) {
//       try {
//         await deleteTeamMember(selectedTeam, memberId)
//         setMembers(members.filter((m) => m.id !== memberId))
//       } catch (error: any) {
//         console.error("Erreur lors de la suppression du membre:", error)
//       }
//     }
//   }

//   const addMember = async () => {
//     if (selectedTeam && newMember.nom && newMember.prenom) {
//       const memberData = { ...newMember, equipeId: selectedTeam }
//       try {
//         const response = await addMemberToTeam(selectedTeam, memberData)
//         setMembers([...members, response])
//         setNewMember({ nom: "", prenom: "" }) // Réinitialiser les champs après ajout
//       } catch (error: any) {
//         console.error("Erreur lors de l'ajout du membre:", error)
//       }
//     } else {
//       alert("Veuillez remplir tous les champs.")
//     }
//   }

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-[#6BA7E2]/5 via-white to-[#1b3971]/5">
//       <Sidebar />
//       <main className="flex-1 ml-64 p-8">
//         <div className="space-y-8">
//           {/* Header */}
//           <div className="text-center">
//             <h1 className="text-4xl font-bold bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] bg-clip-text text-transparent mb-4">
//               Gestion des Équipes
//             </h1>
//           </div>

//           {/* Teams Table */}
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
//             <div className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] text-white p-6">
//               <h2 className="text-xl font-bold">Liste des Équipes</h2>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Id</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nom de l'Équipe</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Catégorie</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tournoi</th>
//                     <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Membres</th>
//                     <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {teams.map((team) => (
//                     <tr key={team.id} className="hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-sm font-medium text-gray-900">{team.id}</td>
//                       <td className="px-6 py-4 text-sm text-gray-900">{team.nom}</td>
//                       <td className="px-6 py-4">
//                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#6BA7E2]/10 text-[#6BA7E2]">
//                           {team.categorie}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 text-sm text-gray-900">{team.tournoiNom}</td>
//                       <td className="px-6 py-4 text-center">
//                         <button
//                           className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium transition-colors"
//                           onClick={() => loadMembers(team.id)}
//                         >
//                           Consulter
//                         </button>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex items-center justify-center space-x-2">
//                           <button
//                             className="bg-[#6BA7E2] hover:bg-[#5a96d1] text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
//                             onClick={() => navigate(`/teams/edit/${team.id}`)}
//                           >
//                             Modifier
//                           </button>
//                           <button
//                             className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
//                             onClick={() => deleteTeam(team.id)}
//                           >
//                             Supprimer
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="p-6 bg-gray-50 border-t">
//               <button
//                 className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] hover:from-[#5a96d1] hover:to-[#2d4a7a] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
//                 onClick={() => navigate("/teams/create")}
//               >
//                 Ajouter une nouvelle Équipe
//               </button>
//             </div>
//           </div>

//           {/* Members Section */}
//           {selectedTeam && (
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
//               <div className="bg-gradient-to-r from-[#1b3971] to-[#6BA7E2] text-white p-6">
//                 <h3 className="text-xl font-bold">Membres de l'Équipe</h3>
//               </div>

//               <div className="p-6">
//                 <div className="overflow-x-auto mb-6">
//                   <table className="w-full">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Id</th>
//                         <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Nom</th>
//                         <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Prénom</th>
//                         <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {members.map((member) => (
//                         <tr key={member.id} className="hover:bg-gray-50">
//                           <td className="px-4 py-3 text-sm font-medium text-gray-900">{member.id}</td>
//                           <td className="px-4 py-3 text-sm text-gray-900">{member.nom}</td>
//                           <td className="px-4 py-3 text-sm text-gray-900">{member.prenom}</td>
//                           <td className="px-4 py-3">
//                             <div className="flex items-center justify-center space-x-2">
//                               <button
//                                 className="bg-[#6BA7E2] hover:bg-[#5a96d1] text-white px-3 py-1 rounded-lg text-sm transition-colors"
//                                 disabled
//                               >
//                                 Modifier
//                               </button>
//                               <button
//                                 className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
//                                 onClick={() => deleteMember(member.id)}
//                               >
//                                 Supprimer
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 <div className="bg-gray-50 rounded-xl p-6">
//                   <h4 className="text-lg font-semibold text-gray-900 mb-4">Ajouter un Nouveau Membre</h4>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
//                       <input
//                         type="text"
//                         value={newMember.nom}
//                         onChange={(e) => setNewMember({ ...newMember, nom: e.target.value })}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6BA7E2] focus:border-transparent"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
//                       <input
//                         type="text"
//                         value={newMember.prenom}
//                         onChange={(e) => setNewMember({ ...newMember, prenom: e.target.value })}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6BA7E2] focus:border-transparent"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <button
//                     className="mt-4 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] text-white px-6 py-2 rounded-lg font-medium hover:from-[#5a96d1] hover:to-[#2d4a7a] transition-all"
//                     onClick={addMember}
//                   >
//                     Ajouter Membre
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   )
// }

// export default TeamManagement

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  getAllEquipes,
  getTeamMembers,
  deleteEquipe,
  deleteTeamMember,
  addMemberToTeam,
  updateTeamMember,
} from "../api/api"
import Sidebar from "../components/Sidebar"

const TeamManagement: React.FC = () => {
  const [teams, setTeams] = useState<any[]>([])
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null)
  const [members, setMembers] = useState<any[]>([])
  const [newMember, setNewMember] = useState({ nom: "", prenom: "" }) // État pour le nouveau membre
  const [editingMember, setEditingMember] = useState<any>(null) // État pour le membre en cours de modification
  const [isEditing, setIsEditing] = useState(false) // État pour activer/désactiver le mode édition
  const navigate = useNavigate()

  useEffect(() => {
    loadTeams()
  }, [])

  const loadTeams = async () => {
    try {
      const data = await getAllEquipes()
      const updatedTeams = data.map((team: any) => ({
        ...team,
        tournoiNom: team.tournoi && typeof team.tournoi === "object" ? team.tournoi.nom : "N/A",
      }))
      setTeams(updatedTeams)
    } catch (error: any) {
      console.error("Erreur lors du chargement des équipes:", error)
    }
  }

  const loadMembers = async (teamId: number) => {
    setSelectedTeam(teamId)
    try {
      const data = await getTeamMembers(teamId)
      setMembers(data)
    } catch (error: any) {
      console.error("Erreur lors du chargement des membres:", error)
    }
  }

  const deleteTeam = async (teamId: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette équipe ?")) {
      try {
        await deleteEquipe(teamId)
        setTeams(teams.filter((team) => team.id !== teamId))
        if (selectedTeam === teamId) {
          setSelectedTeam(null)
          setMembers([])
          setNewMember({ nom: "", prenom: "" })
          setEditingMember(null)
          setIsEditing(false)
        }
      } catch (error: any) {
        console.error("Erreur lors de la suppression de l'équipe:", error)
      }
    }
  }

  const deleteMember = async (memberId: number) => {
    if (selectedTeam && window.confirm("Êtes-vous sûr de vouloir supprimer ce membre ?")) {
      try {
        await deleteTeamMember(selectedTeam, memberId)
        setMembers(members.filter((m) => m.id !== memberId))
        setEditingMember(null)
        setIsEditing(false)
      } catch (error: any) {
        console.error("Erreur lors de la suppression du membre:", error)
      }
    }
  }

  const addMember = async () => {
    if (selectedTeam && newMember.nom && newMember.prenom) {
      const memberData = { ...newMember, equipeId: selectedTeam }
      try {
        const response = await addMemberToTeam(selectedTeam, memberData)
        setMembers([...members, response])
        setNewMember({ nom: "", prenom: "" })
      } catch (error: any) {
        console.error("Erreur lors de l'ajout du membre:", error)
      }
    } else {
      alert("Veuillez remplir tous les champs.")
    }
  }

  const startEditingMember = (member: any) => {
    setEditingMember({ ...member })
    setIsEditing(true)
  }

  const updateMember = async () => {
    if (selectedTeam && editingMember && editingMember.nom && editingMember.prenom) {
      try {
        const response = await updateTeamMember(selectedTeam, editingMember.id, {
          nom: editingMember.nom,
          prenom: editingMember.prenom,
        })
        setMembers(members.map((m) => (m.id === response.id ? response : m)))
        setEditingMember(null)
        setIsEditing(false)
      } catch (error: any) {
        console.error("Erreur lors de la modification du membre:", error)
      }
    } else {
      alert("Veuillez remplir tous les champs.")
    }
  }

  const cancelEditing = () => {
    setEditingMember(null)
    setIsEditing(false)
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#6BA7E2]/5 via-white to-[#1b3971]/5">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] bg-clip-text text-transparent mb-4">
              Gestion des Équipes
            </h1>
          </div>

          {/* Teams Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] text-white p-6">
              <h2 className="text-xl font-bold">Liste des Équipes</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Id</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nom de l'Équipe</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Catégorie</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tournoi</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Membres</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {teams.map((team) => (
                    <tr key={team.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{team.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{team.nom}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#6BA7E2]/10 text-[#6BA7E2]">
                          {team.categorie}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{team.tournoiNom}</td>
                      <td className="px-6 py-4 text-center">
                        <button
                          className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium transition-colors"
                          onClick={() => loadMembers(team.id)}
                        >
                          Consulter
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            className="bg-[#6BA7E2] hover:bg-[#5a96d1] text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
                            onClick={() => navigate(`/teams/edit/${team.id}`)}
                          >
                            Modifier
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
                            onClick={() => deleteTeam(team.id)}
                          >
                            Supprimer
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-gray-50 border-t">
              <button
                className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] hover:from-[#5a96d1] hover:to-[#2d4a7a] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                onClick={() => navigate("/teams/create")}
              >
                Ajouter une nouvelle Équipe
              </button>
            </div>
          </div>

          {/* Members Section */}
          {selectedTeam && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-[#1b3971] to-[#6BA7E2] text-white p-6">
                <h3 className="text-xl font-bold">Membres de l'Équipe</h3>
              </div>

              <div className="p-6">
                <div className="overflow-x-auto mb-6">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Id</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Nom</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Prénom</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {members.map((member) => (
                        <tr key={member.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">{member.id}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{member.nom}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{member.prenom}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-center space-x-2">
                              <button
                                className="bg-[#6BA7E2] hover:bg-[#5a96d1] text-white px-3 py-1 rounded-lg text-sm transition-colors"
                                onClick={() => startEditingMember(member)}
                              >
                                Modifier
                              </button>
                              <button
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                                onClick={() => deleteMember(member.id)}
                              >
                                Supprimer
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Formulaire de modification d'un membre */}
                {isEditing && editingMember && (
                  <div className="bg-gray-50 rounded-xl p-6 mt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Modifier un Membre</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                        <input
                          type="text"
                          value={editingMember.nom}
                          onChange={(e) =>
                            setEditingMember({ ...editingMember, nom: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6BA7E2] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                        <input
                          type="text"
                          value={editingMember.prenom}
                          onChange={(e) =>
                            setEditingMember({ ...editingMember, prenom: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6BA7E2] focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex gap-4">
                      <button
                        className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] text-white px-6 py-2 rounded-lg font-medium hover:from-[#5a96d1] hover:to-[#2d4a7a] transition-all"
                        onClick={updateMember}
                      >
                        Sauvegarder
                      </button>
                      <button
                        className="bg-gray-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-600 transition-all"
                        onClick={cancelEditing}
                      >
                        Annuler
                      </button>
                    </div>
                  </div>
                )}

                {/* Formulaire d'ajout d'un nouveau membre */}
                <div className="bg-gray-50 rounded-xl p-6 mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Ajouter un Nouveau Membre</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                      <input
                        type="text"
                        value={newMember.nom}
                        onChange={(e) => setNewMember({ ...newMember, nom: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6BA7E2] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                      <input
                        type="text"
                        value={newMember.prenom}
                        onChange={(e) => setNewMember({ ...newMember, prenom: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6BA7E2] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <button
                    className="mt-4 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] text-white px-6 py-2 rounded-lg font-medium hover:from-[#5a96d1] hover:to-[#2d4a7a] transition-all"
                    onClick={addMember}
                  >
                    Ajouter Membre
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default TeamManagement