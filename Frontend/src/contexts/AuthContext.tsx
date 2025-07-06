/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { createContext, useContext, useState, type ReactNode } from 'react';

// interface User {
//   role: string;
//   // Ajoutez d'autres propriétés utilisateur si nécessaire (id, nom, etc.)
// }

// interface AuthContextType {
//   user: User | null;
//   login: (userData: User) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);

//   // Fonction de connexion
//   const login = (userData: User) => {
//     setUser(userData);
//     // Optionnel : Sauvegarder dans localStorage pour persistance
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   // Fonction de déconnexion
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error('useAuth must be used within an AuthProvider');
//   return context;
// };

import React, { createContext, useContext, useState, useEffect } from 'react';
import { login as loginApi, getCurrentUser } from '../api/api';

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const initializeUser = async () => {
      const storedUser = getCurrentUser();
      if (storedUser) {
        setUser(storedUser);
      }
    };
    initializeUser();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await loginApi(email, password);
    if (response?.user) {
      setUser(response.user);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
