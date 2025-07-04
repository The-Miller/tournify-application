import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/utilisateurs';

export const registerUser = async (user: any) => {
  try {
    const response = await axios.post(`${apiUrl}/register`, user);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de l\'inscription');
  }
};

export const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, credentials);
    return response.data; // Assurez-vous que l'API renvoie un objet avec 'token' et 'role'
  } catch (error) {
    throw new Error('Erreur lors de la connexion');
  }
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/connexion';
};