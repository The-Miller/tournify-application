/* eslint-disable react/no-unescaped-entities */

import type React from "react"

const Presentation: React.FC = () => {
  const features = [
    {
      title: "Logiciel 100% en ligne",
      description:
        "Vos compétitions sont partout, tout le temps avec vous sur votre ordinateur, tablette et smartphone. Pas besoin d'installation, Toornament est disponible quel que soit votre appareil, via un site Internet.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      color: "from-[#6BA7E2] to-[#5a96d1]",
    },
    {
      title: "Inscriptions en ligne",
      description:
        "Les participants ou équipes sont inscrits à une compétition directement sur Toornament en renseignant sa catégorie et son classement. Vous pourrez ensuite facilement communiquer avec eux par e-mail.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
      color: "from-[#1b3971] to-[#2d4a7a]",
    },
    {
      title: "Saisie des scores en ligne",
      description:
        "L'organisateur et les participants peuvent entrer les scores des matchs directement sur Toornament. Tout le monde voit ainsi en temps réel l'évolution de la compétition.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      color: "from-[#D9534F] to-[#c9302c]",
    },
    {
      title: "Le Community Manager",
      description:
        "Le Community Manager de chaque tournoi peut accèder directement à son tableau de bord pour gérer les posts et les informations qui apparaîtront au niveau du fil d'actualité.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      color: "from-[#f09d7c] to-[#e67e22]",
    },
  ]

  const objectives = [
    "Encourager l'engagement et la participation des étudiants dans le sport",
    "Fournir un outil pratique et facile à utiliser pour organiser des tournois",
    "Créer une communauté active autour des compétitions sportives universitaires",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] rounded-full mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">À Propos de Notre Plateforme</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment Toornament révolutionne l'organisation des tournois universitaires
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-xl mb-12 overflow-hidden">
          <div className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] p-8">
            <div className="flex items-center space-x-4 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Notre Mission</h2>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-white/20 text-white border border-white/30 rounded-full mt-2">
                  Excellence • Innovation • Communauté
                </span>
              </div>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Bienvenue sur notre plateforme de gestion de tournois inter-universitaires. Notre objectif est de
              simplifier l'organisation des compétitions sportives entre différentes universités, tout en offrant une
              expérience enrichissante et interactive aux participants, spectateurs, et organisateurs.
            </p>
            <div className="p-6 bg-[#6BA7E2]/10 rounded-lg border-l-4 border-[#6BA7E2]">
              <p className="text-[#1b3971] font-medium">
                Nous nous engageons à promouvoir l'esprit sportif, l'amitié, et la compétition saine parmi les étudiants
                de diverses universités. Notre plateforme offre des fonctionnalités avancées pour gérer les
                inscriptions, planifier les matchs, suivre les scores, et bien plus encore.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-xl mb-12 overflow-hidden">
          <div className="bg-gradient-to-r from-[#D9534F] to-[#f09d7c] text-white p-8">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
              <h2 className="text-2xl font-bold">Rencontrez Notre Équipe</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Notre équipe est composée de passionnés de sport et de technologie, travaillant ensemble pour offrir la
              meilleure expérience de gestion de tournois possible.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { role: "Développeurs", color: "bg-[#6BA7E2]/10 text-[#6BA7E2]" },
                { role: "Designers UX/UI", color: "bg-[#D9534F]/10 text-[#D9534F]" },
                { role: "Experts Sport", color: "bg-[#1b3971]/10 text-[#1b3971]" },
              ].map((member, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div
                    className={`w-12 h-12 ${member.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">{member.role}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#1b3971] to-[#6BA7E2] text-white p-8">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <h2 className="text-2xl font-bold">Nos Objectifs et Valeurs</h2>
            </div>
          </div>
          <div className="p-8">
            <div className="space-y-4 mb-8">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-[#6BA7E2]/10 rounded-lg hover:bg-[#6BA7E2]/20 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#6BA7E2] mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-[#6BA7E2]/10 to-[#1b3971]/10 rounded-lg border border-[#6BA7E2]/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#6BA7E2] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Notre Engagement</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Nous nous engageons à fournir une plateforme fiable, intuitive et innovante qui répond aux besoins
                spécifiques des organisateurs de tournois universitaires, tout en créant une communauté dynamique autour
                du sport étudiant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentation
