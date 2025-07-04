/* eslint-disable react/no-unescaped-entities */
// import { NavLink } from 'react-router-dom';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#6BA7E2] text-white py-[10px] w-full">
//       <div className="mx-auto flex justify-between items-center px-4 max-w-[1200px]">
//         {/* Section Image */}
//         <div className="text-left">
//           <img src="/assets/toornamentwhite.png" alt="Footer Image" className="h-[120px] mb-[5px]" />
//         </div>

//         {/* Section À Propos */}
//         <div className="mx-[15px]">
//           <h1 className="text-xl font-bold">A PROPOS</h1>
//           <ul className="list-none p-0">
//             <li>
//               <NavLink to="/presentation" className="text-white no-underline hover:text-[#1b3971] hover:underline">
//                 Présentation
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" className="text-white no-underline hover:text-[#1b3971] hover:underline">
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* Section Réseaux Sociaux */}
//         <div className="mx-[15px]">
//           <h1 className="text-xl font-bold">Réseaux Sociaux</h1>
//           <div className="flex">
//             <a href="#" className="text-white mx-2 hover:text-[#1b3971]">
//               <FaFacebook size={32} />
//             </a>
//             <a href="#" className="text-white mx-2 hover:text-[#1b3971]">
//               <FaInstagram size={32} />
//             </a>
//             <a href="#" className="text-white mx-2 hover:text-[#1b3971]">
//               <FaTwitter size={32} />
//             </a>
//           </div>
//         </div>

//         {/* Section Copyright */}
//         <div className="text-base ml-[20px]">
//           <p>© 2024 Toornament</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import type React from "react"
import { NavLink } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1b3971] to-[#6BA7E2] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/assets/toornamentwhite.png" alt="Toornament" className="h-12 mr-3" />
              <div>
                <h3 className="text-xl font-bold">Toornament</h3>
                <p className="text-white/70 text-sm">Tournois Universitaires</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              La plateforme de référence pour organiser et suivre les tournois universitaires. Rejoignez notre
              communauté sportive !
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                  label: "Twitter",
                },
                {
                  icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
                  label: "Facebook",
                },
                {
                  icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z",
                  label: "Instagram",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Navigation
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-white/50"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Accueil" },
                { to: "/presentation", label: "Présentation" },
                { to: "/fil-actualite", label: "Actualités" },
                { to: "/classements", label: "Classements" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <svg
                      className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-white/50"></div>
            </h4>
            <ul className="space-y-3">
              {[
                "Gestion de tournois",
                "Inscriptions en ligne",
                "Suivi des scores",
                "Classements temps réel",
                "Community Management",
              ].map((service, index) => (
                <li key={index} className="text-white/80 flex items-center">
                  <svg className="w-3 h-3 mr-2 text-[#D9534F]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Contact
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-white/50"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#D9534F] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-white/80 text-sm">toornament@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#D9534F] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="text-white/80 text-sm">+221 77 461 64 18</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#D9534F] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-white/80 text-sm">
                    Dakar, Golf Nord
                    <br />
                    Sénégal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© 2024 Toornament. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
