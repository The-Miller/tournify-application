/* eslint-disable react/no-unescaped-entities */
// import { NavLink } from 'react-router-dom';

// const Header: React.FC = () => {
//   return (
//     <header className="bg-[#6BA7E2] py-[10px] w-full">
//       <div className="mx-auto flex justify-between items-center px-4 max-w-[1200px]">
//         {/* Logo */}
//         <NavLink to="/" className="flex items-center">
//           <img src="/assets/toornamentwhite.png" alt="Logo" className="h-[80px]" />
//         </NavLink>

//         {/* Navigation et boutons */}
//         <div className="flex items-center">
//           <nav>
//             <ul className="flex list-none m-0 p-0">
//               <li className="mr-5">
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     `text-white no-underline text-base hover:text-[#1b3971] ${isActive ? 'font-bold' : ''}`
//                   }
//                 >
//                   Accueil
//                 </NavLink>
//               </li>
//               <li className="mr-5">
//                 <NavLink
//                   to="/presentation"
//                   className={({ isActive }) =>
//                     `text-white no-underline text-base hover:text-[#1b3971] ${isActive ? 'font-bold' : ''}`
//                   }
//                 >
//                   Présentation
//                 </NavLink>
//               </li>
//               <li className="mr-5">
//                 <NavLink
//                   to="/fil-actualite"
//                   className={({ isActive }) =>
//                     `text-white no-underline text-base hover:text-[#1b3971] ${isActive ? 'font-bold' : ''}`
//                   }
//                 >
//                   Fil d'actualité
//                 </NavLink>
//               </li>
//               <li className="mr-5">
//                 <NavLink
//                   to="/tournois"
//                   className={({ isActive }) =>
//                     `text-white no-underline text-base hover:text-[#1b3971] ${isActive ? 'font-bold' : ''}`
//                   }
//                 >
//                   Tournois
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) =>
//                     `text-white no-underline text-base hover:text-[#1b3971] ${isActive ? 'font-bold' : ''}`
//                   }
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//           </nav>
//           <div className="ml-5">
//             <NavLink
//               to="/inscription"
//               className="bg-[#D9534F] text-white px-4 py-2 rounded mr-[10px] hover:bg-[#f09d7c] no-underline"
//             >
//               Inscription
//             </NavLink>
//             <NavLink
//               to="/connexion"
//               className="bg-[#1b3971] text-white px-4 py-2 rounded hover:bg-[#8db1f3] no-underline"
//             >
//               Connexion
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import type React from "react"
import { NavLink } from "react-router-dom"

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] shadow-xl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-1"></div>
      </div>

      <div className="relative container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src="/assets/toornamentwhite.png"
                alt="Toornament Logo"
                className="h-16 relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="ml-3 hidden md:block">
              <h1 className="text-white font-bold text-xl">Toornament</h1>
              <p className="text-white/80 text-xs">Tournois Universitaires</p>
            </div>
          </NavLink>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { to: "/", label: "Accueil" },
              { to: "/presentation", label: "Présentation" },
              { to: "/fil-actualite", label: "Fil d'actualité" },
              { to: "/classements", label: "Classements" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-white font-medium transition-all duration-300 rounded-lg group ${
                    isActive ? "bg-white/20" : "hover:bg-white/10"
                  }`
                }
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <NavLink
              to="/inscription"
              className="bg-[#D9534F] hover:bg-[#c9302c] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              <span>Inscription</span>
            </NavLink>
            <NavLink
              to="/connexion"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-white/30 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Connexion</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
