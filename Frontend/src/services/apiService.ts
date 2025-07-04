import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const apiService = {
  // Matchs
  getMatches: () => axios.get(`${API_BASE_URL}/matches`),
  addMatch: (match: any) => axios.post(`${API_BASE_URL}/matches`, match),
  updateMatch: (match: any) => axios.put(`${API_BASE_URL}/matches/${match.id}`, match),
  deleteMatch: (id: number) => axios.delete(`${API_BASE_URL}/matches/${id}`),

  // Équipes
  getEquipes: () => axios.get(`${API_BASE_URL}/teams`),
  getEquipeById: (id: number) => axios.get(`${API_BASE_URL}/teams/${id}`),

  // Tournois
  getTournois: () => axios.get(`${API_BASE_URL}/tournaments`),
  getTournoiById: (id: number) => axios.get(`${API_BASE_URL}/tournaments/${id}`),
};