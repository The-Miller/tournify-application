/* eslint-disable @typescript-eslint/no-unused-vars */

import type React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Sidebar: React.FC = () => {
  const { user, logout: authLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authLogout();
    navigate("/connexion");
  };

  if (!user) {
    return null;
  }

  let links = [];
  let logoText = "";

  switch (user.role) {
    case "ADMINISTRATEUR":
      logoText = "Super Admin Dashboard";
      links = [
        { to: "/dashboard-superadmin", icon: "fa-users", label: "Tableau Super Admin" },
        { to: "/users", icon: "fa-users", label: "Gestion des Utilisateurs" },
        { to: "/tournaments", icon: "fa-trophy", label: "Gestion des Tournois" },
        { to: "/teams", icon: "fa-users", label: "Gestion des Équipes" },
        { to: "/matches", icon: "fa-life-ring", label: "Gestion des Matchs" },
        { to: "/post-management", icon: "fa-newspaper", label: "Gestion des posts" },
        // { to: "/classements/manage/:sport/:tournamentId", icon: "fa-trophy", label: "Gestion des Classements" }, // À ajuster dynamiquement
      ];
      break;
    case "GERANT":
      logoText = "Gerant Dashboard";
      links = [
        { to: "/dashboard-admin", icon: "fa-chart-line", label: "Tableau de Bord" },
        { to: "/tournaments", icon: "fa-trophy", label: "Créer Tournoi" },
        { to: "/teams", icon: "fa-users", label: "Gestion des Équipes" },
        { to: "/matches", icon: "fa-life-ring", label: "Gestion des Matchs" },
        { to: "/post-management", icon: "fa-newspaper", label: "Gestion des posts" },
     ];
      break;
    case "COMMUNITY_MANAGER":
      logoText = "Community Dashboard";
      links = [
        { to: "/dashboard-community", icon: "fa-newspaper", label: "Tableau Community" },
        { to: "/post-management", icon: "fa-newspaper", label: "Gestion des posts" },
      ];
      break;
    case "UTILISATEUR":
      logoText = "User Dashboard";
      links = [
        { to: "/dashboard-admin", icon: "fa-chart-line", label: "Tableau de Bord" },
        { to: "/tournois", icon: "fa-trophy", label: "Tournois" },
      ];
      break;
    default:
      return null;
  }

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-[#6BA7E2] to-[#1b3971] text-white shadow-2xl z-50">
      {/* Logo Container */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">{logoText}</h2>
            <p className="text-xs text-white/70">Toornament</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 group"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className={`fa ${link.icon} group-hover:scale-110 transition-transform`}></i>
                </div>
                <span className="font-medium">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-white/20">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-red-500/20 transition-all duration-200 group"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
          <span className="font-medium">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;