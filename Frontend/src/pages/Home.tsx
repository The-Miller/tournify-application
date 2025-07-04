/* eslint-disable react/no-unescaped-entities */
// import { Link } from 'react-router-dom';

// const Home: React.FC = () => {
//   return (
//     <div className="px-5 py-5 bg-white">
//       {/* Section 1 */}
//       <div className="flex flex-col md:flex-row items-center mb-[30px]">
//         <div className="md:w-1/2 p-[15px]">
//           <img src="/assets/toornament.png" alt="T" className="w-[60%] mb-[100px]" />
//           <p className="text-gray-600 text-xl italic leading-7">
//             Toornament est un outil en ligne conçu pour faciliter l'organisation de tournois universitaires. Il permet de gérer divers aspects d'un tournoi, tels que l'inscription des équipes, la planification des matchs et la saisie des scores. Toornament propose plusieurs formats de tournoi, comme les poules, les phases éliminatoires ou les matchs simples, avec une interface de planification des matchs.
//           </p>
//         </div>
//         <div className="md:w-1/2 p-[15px]">
//           <img src="/assets/hame.avif" alt="Image 1" className="w-[70%] rounded-[10px]" />
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div className="flex flex-col md:flex-row items-center mb-[30px]">
//         <div className="md:w-1/2 p-[15px]">
//           <h1 className="text-[1.5rem] font-bold">Gérez votre prochain tournoi avec Toornament</h1>
//           <p className="text-gray-600 text-xl italic leading-7 my-4">
//             Programmez votre prochain tournoi avec Toornament. <br />
//             Planification simple et rapide <br />
//             Superbe affichage en direct et en continu <br />
//             Page d'inscription en ligne
//           </p>
//           <Link
//             to="/connexion"
//             className="bg-[#1b3971] text-white px-6 py-3 rounded text-xl hover:bg-[#8db1f3] no-underline mt-5"
//           >
//             Créer un tournoi
//           </Link>
//         </div>
//         <div className="md:w-1/2 p-[15px]">
//           <img src="/assets/tourn.png" alt="Image 3" className="w-full rounded-[10px]" />
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="flex flex-col md:flex-row-reverse items-center mb-[30px]">
//         <div className="md:w-1/2 p-[15px]">
//           <h1 className="text-[1.5rem] font-bold">Votre Tournoi. À votre façon.</h1>
//           <p className="text-gray-600 text-xl italic leading-7 my-4">
//             Toornament propose un grand nombre de formats et de paramètres de tournois qui peuvent gérer n'importe quoi, depuis votre partie du vendredi soir jusqu'à une série de tournois en cours ou un tournoi de plusieurs jours avec de nombreux participants.
//           </p>
//         </div>
//         <div className="md:w-1/2 p-[15px]">
//           <img src="/assets/tele.png" alt="tel" className="w-full rounded-[10px]" />
//         </div>
//       </div>

//       {/* Section Témoignages */}
//       <div className="bg-[#f9f9f9] py-[50px] px-5 text-center">
//         <h2 className="text-[2.5rem] font-bold text-[#333] mb-[10px]">Ce qu'ils en disent</h2>
//         <p className="text-[1.2rem] text-[#666] mb-[40px]">
//           Découvrez toutes les raisons qui motivent nos clients à nous recommander
//         </p>
//         <div className="flex flex-wrap justify-center gap-[30px]">
//           <div className="bg-white rounded-[10px] p-5 shadow-[0_4px_10px_rgba(0,0,0,0.1)] max-w-[45%]">
//             <p className="text-[#555] text-[1.1rem] leading-7 mb-5">
//               Même une annulation de dernière minute d'une équipe se gère facilement avec Toornament. Investir dans Toornament, c'est moins de stress et plus de souplesse.
//             </p>
//             <div className="flex items-center">
//               <img src="/assets/lam.jpg" alt="Logo" className="w-[50px] h-[50px] rounded-full mr-[15px]" />
//               <div>
//                 <p className="font-bold text-[1.2rem]">Abdou Aziz Lam</p>
//                 <p className="text-[#999] text-[0.9rem]">Planificateur de compétitions à l'IAM</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-[10px] p-5 shadow-[0_4px_10px_rgba(0,0,0,0.1)] max-w-[45%]">
//             <p className="text-[#555] text-[1.1rem] leading-7 mb-5">
//               Toornament offre un aperçu clair à toutes les personnes présentes sur le site de la compétition. Idéal également pour les organisateurs, car tous les matchs peuvent être planifiés facilement.
//             </p>
//             <div className="flex items-center">
//               <img src="/assets/bouba.jpg" alt="Logo" className="w-[50px] h-[50px] rounded-full mr-[15px]" />
//               <div>
//                 <p className="font-bold text-[1.2rem]">Boubacar Niang</p>
//                 <p className="text-[#999] text-[0.9rem]">Membre du comité des tournois Universitaires</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import type React from "react"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
  const features = [
    {
      title: "Planification simple et rapide",
      description: "Organisez vos tournois en quelques clics",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Affichage en direct",
      description: "Suivez les résultats en temps réel",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Inscription en ligne",
      description: "Permettez aux équipes de s'inscrire facilement",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
    },
  ]

  const testimonials = [
    {
      name: "Abdou Aziz Lam",
      role: "Planificateur de compétitions à l'IAM",
      quote:
        "Même une annulation de dernière minute d'une équipe se gère facilement avec Toornament. Investir dans Toornament, c'est moins de stress et plus de souplesse.",
    },
    {
      name: "Boubacar Niang",
      role: "Membre du comité des tournois Universitaires",
      quote:
        "Toornament offre un aperçu clair à toutes les personnes présentes sur le site de la compétition. Idéal également pour les organisateurs.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#6BA7E2] via-[#5a96d1] to-[#1b3971]">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <span className="inline-block px-4 py-2 text-sm font-medium bg-white/20 text-white border border-white/30 rounded-full backdrop-blur-sm">
                  ✨ Plateforme de tournois universitaires
                </span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Organisez vos tournois avec
                  <span className="block text-yellow-400 mt-2">Toornament</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                  Toornament est un outil en ligne conçu pour faciliter l'organisation de tournois universitaires. Gérez
                  les inscriptions, planifiez les matchs et suivez les scores en temps réel.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/connexion"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#1b3971] bg-yellow-400 hover:bg-yellow-500 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  Créer un tournoi
                </Link>
                <Link
                  to="/presentation"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-xl transition-all duration-200 backdrop-blur-sm"
                >
                  En savoir plus
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-white/20 rounded-3xl blur-3xl"></div>
              <img
                src="../../public/assets/toornamentwhite.png?height=500&width=600"
                alt="Toornament Platform"
                className="relative w-full rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] bg-clip-text text-transparent mb-4">
              Gérez votre prochain tournoi avec Toornament
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une solution complète pour organiser des tournois professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] bg-clip-text text-transparent">
                Votre Tournoi. À votre façon.
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Toornament propose un grand nombre de formats et de paramètres de tournois qui peuvent gérer n'importe
                quoi, depuis votre partie du vendredi soir jusqu'à une série de tournois en cours ou un tournoi de
                plusieurs jours avec de nombreux participants.
              </p>
              <div className="space-y-4">
                {[
                  "Formats multiples de tournois",
                  "Gestion automatisée des matchs",
                  "Interface intuitive et moderne",
                  "Suivi en temps réel",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6BA7E2]/10 to-[#1b3971]/10 rounded-3xl blur-2xl"></div>
              <img
                src="../../public/assets/tourn.png?height=400&width=500"
                alt="Tournament Management"
                className="relative w-full rounded-2xl shadow-xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] bg-clip-text text-transparent mb-4">
              Ce qu'ils en disent
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez toutes les raisons qui motivent nos clients à nous recommander
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#6BA7E2]/5 to-[#1b3971]/5 rounded-2xl shadow-lg p-8 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#6BA7E2]/20"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à organiser votre prochain tournoi ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d'organisateurs qui font confiance à Toornament
          </p>
          <Link
            to="/connexion"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#1b3971] bg-yellow-400 hover:bg-yellow-500 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            Commencer maintenant
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
