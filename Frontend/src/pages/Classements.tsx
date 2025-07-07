/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Classements: React.FC = () => {
  const footballRankings = [
    {
      rank: 1,
      teamName: "ESTM",
      points: 3,
      matchday: 1,
      wins: 1,
      losses: 0,
      draws: 0,
      goalsScored: 5,
      goalsConceded: 0,
      goalDifference: 5,
    },
    {
      rank: 2,
      teamName: "ENSUP",
      points: 3,
      matchday: 1,
      wins: 1,
      losses: 0,
      draws: 0,
      goalsScored: 4,
      goalsConceded: 2,
      goalDifference: 2,
    },
    {
      rank: 3,
      teamName: "ESMT",
      points: 3,
      matchday: 1,
      wins: 1,
      losses: 0,
      draws: 0,
      goalsScored: 3,
      goalsConceded: 1,
      goalDifference: 2,
    },
    {
      rank: 4,
      teamName: "UGB",
      points: 1,
      matchday: 1,
      wins: 0,
      losses: 0,
      draws: 1,
      goalsScored: 0,
      goalsConceded: 0,
      goalDifference: 0,
    },
    {
      rank: 5,
      teamName: "MIT",
      points: 1,
      matchday: 1,
      wins: 0,
      losses: 0,
      draws: 1,
      goalsScored: 0,
      goalsConceded: 0,
      goalDifference: 0,
    },
  ]

  const footballPlayerRankings = [
    { rank: 1, playerName: "Diaw", playerSurname: "Aliou", teamName: "ESTM", goals: 3, matchesPlayed: 1 },
    { rank: 2, playerName: "Fall", playerSurname: "Ousmane", teamName: "ENSUP", goals: 2, matchesPlayed: 1 },
    { rank: 2, playerName: "Ndiaye", playerSurname: "Cheikh", teamName: "ENSUP", goals: 2, matchesPlayed: 1 },
  ]

  const basketballRankings = [
    {
      rank: 1,
      teamName: "SUPDECO",
      points: 3,
      matchday: 1,
      wins: 1,
      losses: 0,
      pointsScored: 88,
      pointsConceded: 61,
      pointDifference: 27,
    },
    {
      rank: 2,
      teamName: "ESTM",
      points: 3,
      matchday: 1,
      wins: 1,
      losses: 0,
      pointsScored: 67,
      pointsConceded: 45,
      pointDifference: 22,
    },
    {
      rank: 3,
      teamName: "ESMT",
      points: 3,
      matchday: 1,
      wins: 1,
      losses: 0,
      pointsScored: 92,
      pointsConceded: 75,
      pointDifference: 17,
    },
  ]

  const getRankBadge = (rank: number) => {
    if (rank === 1)
      return (
        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-500 text-white rounded-full">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          1er
        </span>
      )
    if (rank === 2)
      return (
        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-400 text-white rounded-full">
          2ème
        </span>
      )
    if (rank === 3)
      return (
        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-amber-600 text-white rounded-full">
          3ème
        </span>
      )
    return (
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded-full">
        {rank}
      </span>
    )
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Classements</h1>
            <p className="text-xl text-gray-600">Suivez les performances de toutes les équipes et joueurs</p>
          </div>

          <div className="space-y-12">
            {/* Football Teams Ranking */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] text-white p-6">
                <div className="flex items-center space-x-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                  <div>
                    <h2 className="text-2xl font-bold">Classement des Équipes de Football</h2>
                    <p className="text-blue-100 text-sm">PreSeason Tournament (1ère Journée)</p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rang</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Équipe</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pts</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">V</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">D</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">N</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">BM</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">BE</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Diff</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {footballRankings.map((team, index) => (
                      <tr
                        key={team.teamName}
                        className={`hover:bg-gray-50 transition-colors ${index < 3 ? "bg-green-50" : ""}`}
                      >
                        <td className="px-6 py-4">{getRankBadge(team.rank)}</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">{team.teamName}</td>
                        <td className="px-6 py-4 text-center font-bold text-[#6BA7E2]">{team.points}</td>
                        <td className="px-6 py-4 text-center">{team.wins}</td>
                        <td className="px-6 py-4 text-center">{team.losses}</td>
                        <td className="px-6 py-4 text-center">{team.draws}</td>
                        <td className="px-6 py-4 text-center">{team.goalsScored}</td>
                        <td className="px-6 py-4 text-center">{team.goalsConceded}</td>
                        <td
                          className={`px-6 py-4 text-center font-semibold ${team.goalDifference > 0 ? "text-green-600" : team.goalDifference < 0 ? "text-red-600" : "text-gray-600"}`}
                        >
                          {team.goalDifference > 0 ? "+" : ""}
                          {team.goalDifference}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Football Top Scorers */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#1b3971] to-[#6BA7E2] text-white p-6">
                <div className="flex items-center space-x-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <div>
                    <h2 className="text-2xl font-bold">Classement des Buteurs</h2>
                    <p className="text-blue-100 text-sm">PreSeason Tournament (1ère Journée)</p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rang</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Joueur</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Équipe</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Buts</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Matchs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {footballPlayerRankings.map((player, index) => (
                      <tr
                        key={`${player.playerName}-${player.playerSurname}`}
                        className={`hover:bg-gray-50 transition-colors ${index < 3 ? "bg-blue-50" : ""}`}
                      >
                        <td className="px-6 py-4">{getRankBadge(player.rank)}</td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-900">
                            {player.playerSurname} {player.playerName}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                            {player.teamName}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 bg-[#6BA7E2]/10 text-[#6BA7E2] rounded-full font-bold">
                            {player.goals}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">{player.matchesPlayed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Basketball Teams Ranking */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#D9534F] to-[#f09d7c] text-white p-6">
                <div className="flex items-center space-x-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <div>
                    <h2 className="text-2xl font-bold">Classement Basketball</h2>
                    <p className="text-orange-100 text-sm">PLAYOFFS - Catégorie Basketball (1ère Journée)</p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rang</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Équipe</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pts</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">V</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">D</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">PM</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">PE</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Diff</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {basketballRankings.map((team, index) => (
                      <tr
                        key={team.teamName}
                        className={`hover:bg-gray-50 transition-colors ${index < 3 ? "bg-orange-50" : ""}`}
                      >
                        <td className="px-6 py-4">{getRankBadge(team.rank)}</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">{team.teamName}</td>
                        <td className="px-6 py-4 text-center font-bold text-[#D9534F]">{team.points}</td>
                        <td className="px-6 py-4 text-center">{team.wins}</td>
                        <td className="px-6 py-4 text-center">{team.losses}</td>
                        <td className="px-6 py-4 text-center">{team.pointsScored}</td>
                        <td className="px-6 py-4 text-center">{team.pointsConceded}</td>
                        <td
                          className={`px-6 py-4 text-center font-semibold ${team.pointDifference > 0 ? "text-green-600" : team.pointDifference < 0 ? "text-red-600" : "text-gray-600"}`}
                        >
                          {team.pointDifference > 0 ? "+" : ""}
                          {team.pointDifference}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Classements
