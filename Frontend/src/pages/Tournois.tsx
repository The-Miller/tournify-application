/* eslint-disable react/no-unescaped-entities */
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Tournois: React.FC = () => {
//   const [currentImage, setCurrentImage] = useState('assets/img1.png');
//   const [activeSection, setActiveSection] = useState('img1.png');
//   const navigate = useNavigate();

//   // État pour gérer les pronostics
//   const [matches, setMatches] = useState([
//     { id: 1, equipeA: { nom: 'ESTM' }, equipeB: { nom: 'ENSUP' }, date: '2025-07-10', predictedTeam: '', predictedScorer: '' },
//   ]);

//   const changeImage = (imageName: string) => {
//     setCurrentImage(`assets/${imageName}`);
//     setActiveSection(imageName);
//   };

//   const redirectToClassifications = () => {
//     navigate('/classements');
//   };

//   const handleTeamChange = (id: number, value: string) => {
//     setMatches(matches.map((match) =>
//       match.id === id ? { ...match, predictedTeam: value } : match
//     ));
//   };

//   const handleScorerChange = (id: number, value: string) => {
//     setMatches(matches.map((match) =>
//       match.id === id ? { ...match, predictedScorer: value } : match
//     ));
//   };

//   const submitPrediction = (id: number) => {
//     const match = matches.find((m) => m.id === id);
//     if (match && match.predictedTeam) {
//       alert('Pronostic envoyé avec succès!');
//       console.log('Pronostic soumis:', match);
//     } else {
//       alert('Veuillez sélectionner une équipe gagnante.');
//     }
//   };

//   return (
//     <>
//       {/* Section Intro 1 */}
//       <section className="intro-section py-12 bg-[#f9f9f9]">
//         <div className="container mx-auto max-w-[1200px]">
//           <div className="row flex items-center justify-between">
//             <div className="col-md-6">
//               <img src="assets/img.png" alt="Tournoi Image" className="img-fluid w-1/2 h-auto rounded-[10px]" />
//             </div>
//             <div className="col-md-6 text-content text-left">
//               <h1 className="text-2.5rem font-bold mb-5">Programmez votre prochain tournoi avec Toornament</h1>
//               <p className="text-1.1rem leading-7 mb-5">
//                 Planification simple et rapide<br />
//                 Superbe affichage en direct et en continu<br />
//                 Page d'inscription en ligne
//               </p>
//               <a href="/connexion" className="btn-primary inline-block px-7 py-3 bg-[#007bff] text-white rounded-[5px] text-1.2rem no-underline transition-colors duration-300 hover:bg-[#0056b3]">
//                 Créer gratuitement un tournoi
//               </a>
//               <br /><br />
//               <a href="/video" className="watch-video-link text-[#007bff] text-1rem no-underline transition-colors duration-300 hover:text-[#0056b3]">
//                 Voir la vidéo
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section Tournoi Container */}
//       <section className="intro-section py-12 bg-[#f9f9f9]">
//         <div className="tournoi-container flex justify-between px-5">
//           <div className="left-section w-2/5">
//             <ul className="list-none p-0">
//               <li
//                 className={`cursor-pointer py-3.5 text-1.2em transition-colors duration-300 mb-5 ${activeSection === 'img1.png' ? 'font-bold bg-[#dedede]' : ''}`}
//                 onClick={() => changeImage('img1.png')}
//               >
//                 <h3 className="text-1.5em text-[#333] mb-1">Gérer les participants</h3>
//                 <p className="text-1em text-[#666] m-0">Ajoutez manuellement des tournois, des équipes ou des joueurs en accèdant à votre tableau de bord.</p>
//               </li>
//               <li
//                 className={`cursor-pointer py-3.5 text-1.2em transition-colors duration-300 mb-5 ${activeSection === 'img2.png' ? 'font-bold bg-[#dedede]' : ''}`}
//                 onClick={() => changeImage('img2.png')}
//               >
//                 <h3 className="text-1.5em text-[#333] mb-1">Choisir le bon plan de jeu</h3>
//                 <p className="text-1em text-[#666] m-0">Combinez les poules, les arbres de tournoi et les matchs individuels et définissez votre configuration idéale.</p>
//               </li>
//               <li
//                 className={`cursor-pointer py-3.5 text-1.2em transition-colors duration-300 mb-5 ${activeSection === 'img3.png' ? 'font-bold bg-[#dedede]' : ''}`}
//                 onClick={() => changeImage('img3.png')}
//               >
//                 <h3 className="text-1.5em text-[#333] mb-1">Visualiser vos équipes</h3>
//                 <p className="text-1em text-[#666] m-0">Consulter les effectifs des équipes, vous pourrez modifier ces dernières ou les mettre à jour.</p>
//               </li>
//               <li
//                 className={`cursor-pointer py-3.5 text-1.2em transition-colors duration-300 mb-5 ${activeSection === 'img4.png' ? 'font-bold bg-[#dedede]' : ''}`}
//                 onClick={() => changeImage('img4.png')}
//               >
//                 <h3 className="text-1.5em text-[#333] mb-1">Publier les résultats</h3>
//                 <p className="text-1em text-[#666] m-0">Traitez les résultats en un rien de temps depuis n'importe quel appareil et informez tout le monde instantanément.</p>
//               </li>
//             </ul>
//           </div>
//           <div className="right-section w-3/5 text-center">
//             <img src={currentImage} alt="Tournoi Image" className="w-full rounded-[8px]" />
//           </div>
//         </div>
//       </section>

//       {/* Section Sports */}
//       <section className="intro-section py-12 bg-[#f9f9f9]">
//         <h1 className="titre text-2.5rem font-bold mb-5 text-center">Toornament propose ces différents sports</h1>
//         <div className="sports-section flex flex-wrap justify-around px-5 gap-5">
//           <div className="sport-card w-2/5 p-5 border border-[#ddd] rounded-[10px] text-center bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
//             <img src="assets/football.webp" alt="Football" className="w-[80px] h-[80px] mb-3.5" />
//             <h3 className="text-1.5em text-[#333] my-2.5">Football</h3>
//             <p className="text-1em text-[#666] m-0">Gérez votre tournoi de football. Ne ratez rien avec le classement des équipes, des meilleurs buteurs et passeurs du tournoi.</p>
//           </div>
//           <div className="sport-card w-2/5 p-5 border border-[#ddd] rounded-[10px] text-center bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
//             <img src="assets/basketball.jpeg" alt="Basketball" className="w-[80px] h-[80px] mb-3.5" />
//             <h3 className="text-1.5em text-[#333] my-2.5">Basketball</h3>
//             <p className="text-1em text-[#666] m-0">Organisez vos tournois de basket. Créez des poules et des tableaux, entrez les scores des matchs et suivez en temps réel l'évolution de votre compétition.</p>
//           </div>
//           <div className="sport-card w-2/5 p-5 border border-[#ddd] rounded-[10px] text-center bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
//             <img src="assets/handball.webp" alt="Handball" className="w-[80px] h-[80px] mb-3.5" />
//             <h3 className="text-1.5em text-[#333] my-2.5">Handball</h3>
//             <p className="text-1em text-[#666] m-0">Gérez votre tournoi de handball. Les équipes peuvent s'inscrire et suivre en ligne l'évolution des résultats et les matchs à jour.</p>
//           </div>
//           <div className="sport-card w-2/5 p-5 border border-[#ddd] rounded-[10px] text-center bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
//             <img src="assets/ping-pong.jpeg" alt="Ping-Pong" className="w-[80px] h-[80px] mb-3.5" />
//             <h3 className="text-1.5em text-[#333] my-2.5">Ping-Pong</h3>
//             <p className="text-1em text-[#666] m-0">Organisez votre compétition de ping-pong. Suivez la compétition et le classement des meilleurs joueurs.</p>
//           </div>
//         </div>
//       </section>

//       {/* Section Case Study */}
//       <section className="intro-section py-12 bg-[#f9f9f9]">
//         <div className="case-study-section px-12">
//           <h2 className="text-center text-2.5em mb-5">Classements en direct</h2>
//           <div className="case-study-container flex justify-between items-center">
//             <div className="case-study-text w-1/2">
//               <p className="text-center text-1.2em mb-10">
//                 Suivez l’évolution des compétitions en temps réel grâce à notre fonctionnalité de classements en direct ! Que ce soit pour le football, le basketball ou le handball, restez informé de la performance de vos équipes et joueurs préférés à chaque instant.
//               </p>
//               <p className="text-center text-1.2em mb-10">
//                 Nos tableaux de classements sont mis à jour automatiquement après chaque match, vous offrant une vue complète sur les résultats, les points marqués et les statistiques essentielles.
//               </p>
//               <button
//                 className="btn-classification mx-auto block px-5 py-2.5 bg-[#007bff] text-white rounded-[5px] cursor-pointer transition-colors duration-300 hover:bg-[#0056b3]"
//                 onClick={redirectToClassifications}
//               >
//                 Consulter les classements
//               </button>
//             </div>
//             <div className="case-study-image w-2/5">
//               <img src="assets/ranking.png" alt="UrbanEvent" className="w-full rounded-[10px]" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section Pronostics */}
//       <section className="intro-section py-12 bg-[#f9f9f9]">
//         <h2 className="text-2.5em text-center mb-5">Tentez votre chance avec nos jeux de pronostics</h2>
//         <div className="predict flex gap-8 px-8 bg-[#f5f5f5] rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
//           <div className="left-column w-1/2 bg-white p-6 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
//             <h2 className="text-1.8rem text-[#333] mb-4 border-b-2 border-[#007bff] pb-2 text-center">Pronostics pour les matchs en attente</h2>
//             {matches.map((match) => (
//               <div key={match.id} className="prediction-match mb-6 p-4 border border-[#e0e0e0] rounded-[10px] transition-all duration-300 hover:border-[#007bff] hover:bg-[#f1f9ff]">
//                 <p>{match.equipeA.nom} vs {match.equipeB.nom} - Date: {match.date}</p>
//                 <div>
//                   <label className="block mb-2 font-bold">Équipe gagnante:</label>
//                   <select
//                     className="w-full p-2 mb-4 border border-[#ccc] rounded-[5px] text-1rem transition-border duration-300 focus:border-[#007bff] focus:outline-none"
//                     value={match.predictedTeam}
//                     onChange={(e) => handleTeamChange(match.id, e.target.value)}
//                   >
//                     <option value="">Sélectionner une équipe</option>
//                     <option value={match.equipeA.nom}>{match.equipeA.nom}</option>
//                     <option value={match.equipeB.nom}>{match.equipeB.nom}</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block mb-2 font-bold">Joueur marquant:</label>
//                   <input
//                     className="w-full p-2 mb-4 border border-[#ccc] rounded-[5px] text-1rem transition-border duration-300 focus:border-[#007bff] focus:outline-none"
//                     value={match.predictedScorer}
//                     onChange={(e) => handleScorerChange(match.id, e.target.value)}
//                     placeholder="Entrez le nom du joueur"
//                   />
//                 </div>
//                 <button
//                   className="bg-[#007bff] text-white rounded-[5px] px-4 py-2 text-1rem cursor-pointer transition-colors duration-300 hover:bg-[#0056b3]"
//                   onClick={() => submitPrediction(match.id)}
//                 >
//                   Envoyer Pronostic
//                 </button>
//               </div>
//             ))}
//           </div>
//           <div className="right-column w-1/2 bg-white p-6 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-l-2 border-[#007bff]">
//             <h2 className="text-1.8rem text-[#333] mb-4 border-b-2 border-[#007bff] pb-2 text-center mt-0">Pronostics déjà effectués</h2>
//             {[
//               { matchId: 1, predictedTeam: 'ESTM', predictedScorer: 'Aliou Diaw' },
//             ].map((prediction, index) => (
//               <div key={index} className="prediction-item mb-6 p-4 border border-[#e0e0e0] rounded-[10px] transition-all duration-300 hover:border-[#007bff] hover:bg-[#f1f9ff]">
//                 <p>
//                   ESTM vs ENSUP - Date: 2025-07-10 <br />
//                   Équipe gagnante: {prediction.predictedTeam} <br />
//                   Joueur marquant: {prediction.predictedScorer}
//                 </p>
//               </div>
//             ))}
//             {[
//               { matchId: 1, predictedTeam: 'ESTM', predictedScorer: 'Aliou Diaw' },
//             ].length === 0 && <p className="text-1rem leading-1.5 text-[#555]">Aucun pronostic effectué pour le moment.</p>}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Tournois;

"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Tournois: React.FC = () => {
  const [currentImage, setCurrentImage] = useState("assets/img1.png")
  const [activeSection, setActiveSection] = useState("img1.png")
  const navigate = useNavigate()

  // État pour gérer les pronostics
  const [matches, setMatches] = useState([
    {
      id: 1,
      equipeA: { nom: "ESTM" },
      equipeB: { nom: "ENSUP" },
      date: "2025-07-10",
      predictedTeam: "",
      predictedScorer: "",
    },
  ])

  const changeImage = (imageName: string) => {
    setCurrentImage(`assets/${imageName}`)
    setActiveSection(imageName)
  }

  const redirectToClassifications = () => {
    navigate("/classements")
  }

  const handleTeamChange = (id: number, value: string) => {
    setMatches(matches.map((match) => (match.id === id ? { ...match, predictedTeam: value } : match)))
  }

  const handleScorerChange = (id: number, value: string) => {
    setMatches(matches.map((match) => (match.id === id ? { ...match, predictedScorer: value } : match)))
  }

  const submitPrediction = (id: number) => {
    const match = matches.find((m) => m.id === id)
    if (match && match.predictedTeam) {
      alert("Pronostic envoyé avec succès!")
      console.log("Pronostic soumis:", match)
    } else {
      alert("Veuillez sélectionner une équipe gagnante.")
    }
  }

  const features = [
    {
      id: "img1.png",
      title: "Gérer les participants",
      description: "Ajoutez manuellement des tournois, des équipes ou des joueurs en accèdant à votre tableau de bord.",
    },
    {
      id: "img2.png",
      title: "Choisir le bon plan de jeu",
      description:
        "Combinez les poules, les arbres de tournoi et les matchs individuels et définissez votre configuration idéale.",
    },
    {
      id: "img3.png",
      title: "Visualiser vos équipes",
      description: "Consulter les effectifs des équipes, vous pourrez modifier ces dernières ou les mettre à jour.",
    },
    {
      id: "img4.png",
      title: "Publier les résultats",
      description:
        "Traitez les résultats en un rien de temps depuis n'importe quel appareil et informez tout le monde instantanément.",
    },
  ]

  const sports = [
    {
      name: "Football",
      image: "assets/football.webp",
      description:
        "Gérez votre tournoi de football. Ne ratez rien avec le classement des équipes, des meilleurs buteurs et passeurs du tournoi.",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Basketball",
      image: "assets/basketball.jpeg",
      description:
        "Organisez vos tournois de basket. Créez des poules et des tableaux, entrez les scores des matchs et suivez en temps réel l'évolution de votre compétition.",
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Handball",
      image: "assets/handball.webp",
      description:
        "Gérez votre tournoi de handball. Les équipes peuvent s'inscrire et suivre en ligne l'évolution des résultats et les matchs à jour.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Ping-Pong",
      image: "assets/ping-pong.jpeg",
      description:
        "Organisez votre compétition de ping-pong. Suivez la compétition et le classement des meilleurs joueurs.",
      color: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                    Programmez votre prochain tournoi avec Toornament
                  </h1>
                  <div className="space-y-2 text-lg text-slate-600">
                    <p className="flex items-center">
                      <svg className="h-5 w-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Planification simple et rapide
                    </p>
                    <p className="flex items-center">
                      <svg className="h-5 w-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 5a9 9 0 1118 0 9 9 0 01-18 0z"
                        />
                      </svg>
                      Superbe affichage en direct et en continu
                    </p>
                    <p className="flex items-center">
                      <svg className="h-5 w-5 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Page d'inscription en ligne
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate("/connexion")}
                    className="h-14 px-8 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold text-lg rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Créer gratuitement un tournoi
                  </button>
                  <button
                    onClick={() => navigate("/video")}
                    className="h-14 px-8 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 font-semibold text-lg rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 5a9 9 0 1118 0 9 9 0 01-18 0z"
                      />
                    </svg>
                    Voir la vidéo
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-3xl opacity-20"></div>
                <img
                  src="assets/img.png"
                  alt="Tournoi Image"
                  className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features List */}
              <div className="space-y-6">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className={`cursor-pointer transition-all duration-300 transform hover:scale-[1.02] p-6 rounded-2xl ${
                      activeSection === feature.id
                        ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 shadow-lg"
                        : "bg-white/80 backdrop-blur-sm hover:shadow-md border border-gray-100"
                    }`}
                    onClick={() => changeImage(feature.id)}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-xl ${
                          activeSection === feature.id
                            ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-3xl opacity-20"></div>
                <img
                  src={currentImage || "/placeholder.svg"}
                  alt="Feature Image"
                  className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sports Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Toornament propose ces différents sports
              </h2>
              <p className="text-xl text-slate-600">
                Choisissez parmi nos sports disponibles pour organiser votre tournoi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sports.map((sport, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden rounded-2xl"
                >
                  <div className={`bg-gradient-to-r ${sport.color} text-white p-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <img
                          src={sport.image || "/placeholder.svg"}
                          alt={sport.name}
                          className="w-10 h-10 object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-2xl font-bold">{sport.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 leading-relaxed">{sport.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rankings Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Classements en direct
                    </h2>
                    <div className="space-y-4 text-lg text-slate-600">
                      <p>
                        Suivez l'évolution des compétitions en temps réel grâce à notre fonctionnalité de classements en
                        direct ! Que ce soit pour le football, le basketball ou le handball, restez informé de la
                        performance de vos équipes et joueurs préférés à chaque instant.
                      </p>
                      <p>
                        Nos tableaux de classements sont mis à jour automatiquement après chaque match, vous offrant une
                        vue complète sur les résultats, les points marqués et les statistiques essentielles.
                      </p>
                    </div>
                    <button
                      onClick={redirectToClassifications}
                      className="w-fit h-12 px-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center gap-2"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      Consulter les classements
                    </button>
                  </div>
                </div>
                <div className="relative p-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-10"></div>
                  <img
                    src="assets/ranking.png"
                    alt="Classements"
                    className="relative w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Predictions Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Tentez votre chance avec nos jeux de pronostics
              </h2>
              <p className="text-xl text-slate-600">Prédisez les résultats et gagnez des points !</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Predictions Form */}
              <div className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6">
                  <h3 className="text-xl font-semibold flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    Pronostics pour les matchs en attente
                  </h3>
                </div>

                <div className="p-6 space-y-6">
                  {matches.map((match) => (
                    <div
                      key={match.id}
                      className="border border-slate-200 hover:border-purple-300 transition-colors rounded-xl p-6"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-300">
                            {match.equipeA.nom} vs {match.equipeB.nom}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {match.date}
                          </span>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Équipe gagnante</label>
                            <select
                              value={match.predictedTeam}
                              onChange={(e) => handleTeamChange(match.id, e.target.value)}
                              className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                            >
                              <option value="">Sélectionner une équipe</option>
                              <option value={match.equipeA.nom}>{match.equipeA.nom}</option>
                              <option value={match.equipeB.nom}>{match.equipeB.nom}</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Joueur marquant</label>
                            <input
                              value={match.predictedScorer}
                              onChange={(e) => handleScorerChange(match.id, e.target.value)}
                              placeholder="Entrez le nom du joueur"
                              className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                            />
                          </div>
                        </div>

                        <button
                          onClick={() => submitPrediction(match.id)}
                          className="w-full h-12 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                          Envoyer Pronostic
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Previous Predictions */}
              <div className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
                  <h3 className="text-xl font-semibold flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    Pronostics déjà effectués
                  </h3>
                </div>

                <div className="p-6">
                  <div className="border border-slate-200 rounded-xl p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-300">
                          ESTM vs ENSUP
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          2025-07-10
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-center">
                          <svg
                            className="h-4 w-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>
                          <span className="font-medium">Équipe gagnante:</span>
                          <span className="ml-2 text-green-600 font-semibold">ESTM</span>
                        </p>
                        <p className="flex items-center">
                          <svg
                            className="h-4 w-4 mr-2 text-blue-500"
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
                          <span className="font-medium">Joueur marquant:</span>
                          <span className="ml-2 text-blue-600 font-semibold">Aliou Diaw</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-slate-500 mt-6 italic">Vos autres pronostics apparaîtront ici...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
    
  )
}

export default Tournois
