// /* eslint-disable @typescript-eslint/no-explicit-any */
// export interface UserData {
//   nom: string;
//   prenom: string;
//   email: string;
//   password: string;
//   role?: string;
// }

// export interface UserDataResponse {
//   id: number;
//   nom: string;
//   prenom: string;
//   email: string;
//   role?: string;
// }

// export interface LoginCredentials {
//   email: string;
//   password: string;
// }

// export interface ApiResponse {
//   token?: string;
//   message?: string;
//   user?: UserDataResponse;
//   [key: string]: any;
// }

// export interface TeamStats {
//   teamName: string;
//   points: number;
//   wins: number;
//   losses: number;
//   draws: number;
//   goalsScored?: number;
//   goalsConceded?: number;
//   goalDifference?: number;
//   pointsScored?: number;
//   pointsConceded?: number;
//   pointDifference?: number;
//   matchesPlayed: number;
//   rank?: number;
// }

// export interface RankingsResponse {
//   [sport: string]: {
//     [tournamentId: number]: TeamStats[];
//   };
// }


// export const login: (email: string, password: string) => Promise<ApiResponse & { user: UserDataResponse }>;
// export const register: (userData: UserData) => Promise<ApiResponse>;
// export const getCurrentUser: () => UserDataResponse | null;
// export const logout: () => Promise<void>;
// export const fetchAllUtilisateurs: () => Promise<UserDataResponse[]>;
// export const fetchUtilisateurById: (id: number) => Promise<UserDataResponse>;
// export const updateUtilisateur: (id: number, utilisateurData: UserData) => Promise<UserDataResponse>;
// export const deleteUtilisateur: (id: number) => Promise<void>;
// export const createUtilisateurWithRole: (userData: UserData) => Promise<UserDataResponse>;

// // Équipes
// export const getAllEquipes: () => Promise<any[]>;
// export const getEquipeById: (id: number) => Promise<any>;
// export const createEquipe: (equipeData: any) => Promise<any>;
// export const updateEquipe: (id: number, equipeData: any) => Promise<any>;
// export const deleteEquipe: (id: number) => Promise<void>;

// // Membres
// export const getTeamMembers: (teamId: number) => Promise<any[]>;
// export const addMemberToTeam: (teamId: number, memberData: any) => Promise<any>;
// export const updateTeamMember: (teamId: number, memberId: number, memberData: any) => Promise<any>;
// export const deleteTeamMember: (teamId: number, memberId: number) => Promise<void>;

// // Matchs
// export const getAllMatches: () => Promise<any[]>;
// export const getMatchById: (id: number) => Promise<any>;
// export const createMatch: (matchData: any) => Promise<any>;
// export const updateMatch: (id: number, matchData: any) => Promise<any>;
// export const deleteMatch: (id: number) => Promise<void>;

// // Membres Indépendants
// export const getMembresByEquipe: (equipeId: number) => Promise<any[]>;
// export const createMembre: (membreData: any) => Promise<any>;
// export const updateMembre: (id: number, membreData: any) => Promise<any>;
// export const deleteMembre: (id: number) => Promise<void>;

// // Paiements
// export const createPaiement: (paiementData: any) => Promise<any>;
// export const updatePaiementStatus: (id: number, statut: string) => Promise<any>;
// export const getQRCodeForReservation: (reservationId: number) => Promise<any>;

// //Classements
// export const getAllRankings: () => Promise<any[]>;
// export const getRankings = async (sport: string, tournamentId: number): Promise<TeamStats[]> => {
//   const response = await api.get(`/api/classements/${sport}/${tournamentId}`);
//   return response.data;
// };

// export const createTeamStats = async (equipeId: number, stats: TeamStats): Promise<TeamStats> => {
//   const response = await api.post(`/api/classements/${equipeId}/team-stats`, stats);
//   return response.data;
// };

// export const updateTeamStats = async (id: number, stats: TeamStats): Promise<TeamStats> => {
//   const response = await api.put(`/api/classements/team-stats/${id}`, stats);
//   return response.data;
// };

// export const deleteTeamStats = async (id: number): Promise<void> => {
//   await api.delete(`/api/classements/team-stats/${id}`);
// };

// // Posts
// export const createPost: (formData: any) => Promise<any>;
// export const updatePost: (id: number, formData: any) => Promise<any>;
// export const getAllPosts: () => Promise<any[]>;
// export const likePost: (id: number) => Promise<any>;
// export const deletePost: (id: number) => Promise<void>;

// // Commentaires
// export const addComment: (postId: number, commentData: any) => Promise<any>;
// export const getCommentsByPostId: (postId: number) => Promise<any[]>;
// export const createPrediction: (predictionData: any) => Promise<any>;
// export const getAllPredictions: () => Promise<any[]>;
// export const createPronostic: (pronosticData: any) => Promise<any>;
// export const getAllPronostics: () => Promise<any[]>;
// export const getPronosticById: (id: number) => Promise<any>;
// export const updatePronostic: (id: number, pronosticData: any) => Promise<any>;
// export const deletePronostic: (id: number) => Promise<void>;
// export const createReservation: (reservationData: any) => Promise<any>;
// export const getAllReservations: () => Promise<any[]>;
// export const getReservationById: (id: number) => Promise<any>;
// export const updateReservation: (id: number, reservationData: any) => Promise<any>;
// export const deleteReservation: (id: number) => Promise<void>;
// export const createSocialPost: (postData: any) => Promise<any>;
// export const getAllSocialPosts: () => Promise<any[]>;
// export const createComment: (commentData: any) => Promise<any>;
// export const addLike: (likeData: any) => Promise<any>;
// export const getAllTournaments: () => Promise<any[]>;
// export const getTournamentById: (id: number) => Promise<any>;
// export const createTournament: (tournamentData: any) => Promise<any>;
// export const updateTournament: (id: number, tournamentData: any) => Promise<any>;
// export const deleteTournament: (id: number) => Promise<void>;
// export const getAllUsers: () => Promise<any[]>;
// export const getUserById: (id: number) => Promise<any>;
// export const createUser: (userData: any) => Promise<any>;
// export const updateUser: (id: number, userData: any) => Promise<any>;
// export const deleteUser: (id: number) => Promise<void>;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserData {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  role?: string;
}

export interface UserDataResponse {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ApiResponse {
  token?: string;
  message?: string;
  user?: UserDataResponse;
  [key: string]: any;
}

// export interface TeamStats {
//   teamName: string;
//   points: number;
//   wins: number;
//   losses: number;
//   draws: number;
//   goalsScored: number;
//   goalsConceded: number;
//   goalDifference: number;
//   matchesPlayed: number;
//   rank?: number;
// }

export interface TeamStats {
  id?: number; // Ajout de l'ID comme optionnel
  equipe_id?: number; // Ajout pour lier à une équipe
  teamName: string;
  points: number;
  wins: number;
  losses: number;
  draws: number;
  goalsScored: number;
  goalsConceded: number;
  goalDifference: number;
  matchesPlayed: number;
  pointsScored?: number;
  pointsConceded?: number;
  pointDifference?: number;
  rank?: number;
}
export interface RankingsResponse {
  [sport: string]: {
    [tournamentId: number]: TeamStats[];
  };
}

export const login: (email: string, password: string) => Promise<ApiResponse & { user: UserDataResponse }>;
export const register: (userData: UserData) => Promise<ApiResponse>;
export const getCurrentUser: () => UserDataResponse | null;
export const logout: () => Promise<void>;
export const fetchAllUtilisateurs: () => Promise<UserDataResponse[]>;
export const fetchUtilisateurById: (id: number) => Promise<UserDataResponse>;
export const updateUtilisateur: (id: number, utilisateurData: UserData) => Promise<UserDataResponse>;
export const deleteUtilisateur: (id: number) => Promise<void>;
export const createUtilisateurWithRole: (userData: UserData) => Promise<UserDataResponse>;

// Équipes
export const getAllEquipes: () => Promise<any[]>;
export const getEquipeById: (id: number) => Promise<any>;
export const createEquipe: (equipeData: any) => Promise<any>;
export const updateEquipe: (id: number, equipeData: any) => Promise<any>;
export const deleteEquipe: (id: number) => Promise<void>;

// Membres
export const getTeamMembers: (teamId: number) => Promise<any[]>;
export const addMemberToTeam: (teamId: number, memberData: any) => Promise<any>;
export const updateTeamMember: (teamId: number, memberId: number, memberData: any) => Promise<any>;
export const deleteTeamMember: (teamId: number, memberId: number) => Promise<void>;

// Matchs
export const getAllMatches: () => Promise<any[]>;
export const getMatchById: (id: number) => Promise<any>;
export const createMatch: (matchData: any) => Promise<any>;
export const updateMatch: (id: number, matchData: any) => Promise<any>;
export const deleteMatch: (id: number) => Promise<void>;

// Membres Indépendants
export const getMembresByEquipe: (equipeId: number) => Promise<any[]>;
export const createMembre: (membreData: any) => Promise<any>;
export const updateMembre: (id: number, membreData: any) => Promise<any>;
export const deleteMembre: (id: number) => Promise<void>;

// Paiements
export const createPaiement: (paiementData: any) => Promise<any>;
export const updatePaiementStatus: (id: number, statut: string) => Promise<any>;
export const getQRCodeForReservation: (reservationId: number) => Promise<any>;

// Classements
export const getAllRankings: () => Promise<RankingsResponse>;
export const getRankings: (sport: string, tournamentId: number) => Promise<TeamStats[]>;
export const createTeamStats: (equipeId: number, stats: TeamStats) => Promise<TeamStats>;
export const updateTeamStats: (id: number, stats: TeamStats) => Promise<TeamStats>;
// export const deleteTeamStats: (sport: string, id: number) => Promise<void>;
export const deleteTeamStats: (id: number) => Promise<void>; // Supprime le paramètre sport, car il n'est pas utilisé
// Posts
export const createPost: (formData: any) => Promise<any>;
export const updatePost: (id: number, formData: any) => Promise<any>;
export const getAllPosts: () => Promise<any[]>;
export const likePost: (id: number) => Promise<any>;
export const deletePost: (id: number) => Promise<void>;

// Commentaires
export const addComment: (postId: number, commentData: any) => Promise<any>;
export const getCommentsByPostId: (postId: number) => Promise<any[]>;
export const createPrediction: (predictionData: any) => Promise<any>;
export const getAllPredictions: () => Promise<any[]>;
export const createPronostic: (pronosticData: any) => Promise<any>;
export const getAllPronostics: () => Promise<any[]>;
export const getPronosticById: (id: number) => Promise<any>;
export const updatePronostic: (id: number, pronosticData: any) => Promise<any>;
export const deletePronostic: (id: number) => Promise<void>;
export const createReservation: (reservationData: any) => Promise<any>;
export const getAllReservations: () => Promise<any[]>;
export const getReservationById: (id: number) => Promise<any>;
export const updateReservation: (id: number, reservationData: any) => Promise<any>;
export const deleteReservation: (id: number) => Promise<void>;
export const createSocialPost: (postData: any) => Promise<any>;
export const getAllSocialPosts: () => Promise<any[]>;
export const createComment: (commentData: any) => Promise<any>;
export const addLike: (likeData: any) => Promise<any>;
export const getAllTournaments: () => Promise<any[]>;
export const getTournamentById: (id: number) => Promise<any>;
export const createTournament: (tournamentData: any) => Promise<any>;
export const updateTournament: (id: number, tournamentData: any) => Promise<any>;
export const deleteTournament: (id: number) => Promise<void>;
export const getAllUsers: () => Promise<any[]>;
export const getUserById: (id: number) => Promise<any>;
export const createUser: (userData: any) => Promise<any>;
export const updateUser: (id: number, userData: any) => Promise<any>;
export const deleteUser: (id: number) => Promise<void>;