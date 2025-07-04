import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/tournaments';
const userApiUrl = 'http://localhost:8080/api/utilisateurs';

export const getTournaments = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors du chargement des tournois');
  }
};

export const getTournamentById = async (id: number) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la récupération du tournoi');
  }
};

export const createTournament = async (tournament: any) => {
  try {
    const response = await axios.post(apiUrl, tournament);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la création du tournoi');
  }
};

export const updateTournament = async (id: number, tournament: any) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, tournament);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour du tournoi');
  }
};

export const deleteTournament = async (id: number) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    throw new Error('Erreur lors de la suppression du tournoi');
  }
};

export const createUserWithRole = async (user: any) => {
  try {
    const response = await axios.post(userApiUrl, user);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la création de l\'utilisateur');
  }
};