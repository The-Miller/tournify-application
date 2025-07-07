/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import { getAllPosts } from "../api/api"
import { useAuth } from "../contexts/AuthContext"

const CommunityManagerOverview: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    posts: 0,
  })
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isReady, setIsReady] = useState(false)

  const fetchStats = async () => {
    try {
      setLoading(true)
      const posts = await getAllPosts()
      setStats({
        posts: posts.length,
      })
      setError(null)
    } catch (err) {
      console.error("Erreur lors de la récupération des posts :", err)
      setError("Impossible de charger les statistiques. Veuillez vérifier votre connexion ou réessayer plus tard.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user) {
      fetchStats();
      setIsReady(true); // Indique que l'utilisateur est prêt
    }
  }, [user]);

  if (!isReady) {
    return <div>Chargement...</div>; // Placeholder pendant que user n'est pas prêt
  }

  const statCards = [
    {
      title: "Posts",
      value: stats.posts,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z"
          />
        </svg>
      ),
      color: "from-[#6BA7E2] to-[#5a96d1]",
      bgColor: "bg-[#6BA7E2]/10",
      textColor: "text-[#6BA7E2]",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#6BA7E2]/5 via-white to-[#1b3971]/5">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] bg-clip-text text-transparent mb-4">
            Vue d'ensemble
          </h1>
          <p className="text-xl text-gray-600">Tableau Community Manager</p>
        </div>

        {error ? (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-red-800 mb-2">Erreur de chargement</h3>
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={fetchStats}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Réessayer
            </button>
          </div>
        ) : loading ? (
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-pulse">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              </div>
              <div className="h-8 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-1 gap-8 mb-12">
            {statCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center ${card.textColor} group-hover:scale-110 transition-transform`}
                  >
                    {card.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900 mb-1">{card.value}</div>
                    <div className="text-sm text-gray-500">Total</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Actif
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] text-white p-6">
            <h2 className="text-2xl font-bold flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Actions Rapides
            </h2>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Créer un Post",
                  description: "Ajouter un nouveau post",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  ),
                  color: "from-[#6BA7E2] to-[#5a96d1]",
                  href: "/dashboard-community",
                },
                {
                  title: "Modifier un Post",
                  description: "Modifier un post existant",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  ),
                  color: "from-[#1b3971] to-[#2d4a7a]",
                  href: "/dashboard-community",
                },
              ].map((action, index) => (
                <a
                  key={index}
                  href={action.href}
                  className="group bg-gray-50 hover:bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-gray-200"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {action.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CommunityManagerOverview