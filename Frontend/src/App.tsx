// /* eslint-disable react/react-in-jsx-scope */
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import Header from './components/Header';.........
// // import Footer from './components/Footer';
// import Home from './pages/Home';
// import Inscription from './pages/Inscription';
// import Connexion from './pages/Connexion';
// import Presentation from './pages/Presentation';
// import Contact from './pages/Contact';
// import FilActualite from './pages/FilActualite';
// import Tournois from './pages/Tournois';
// import Classements from './pages/Classements';
// import DashboardCommunity from './pages/DashboardCommunity';
// import DashboardAdmin from './pages/DashboardAdmin';
// // import CreateTournament from './pages/CreateTournament';
// // import EditTournament from './pages/EditTournament';
// import TeamManagement from './pages/TeamManagement';
// import CreateTeam from './pages/CreateTeam';
// import EditTeam from './pages/EditTeam';
// import MatchManagement from './pages/MatchManagement';
// import DashboardSuperAdmin from './pages/DashboardSuperAdmin';
// import SuperAdminOverview from './pages/AdminOverview';
// import Chatbot from './components/Chatbot';
// import { AuthProvider } from './contexts/AuthContext'; 
// import TournamentManagement from './pages/TournamentManagement';

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-white w-full">
//         <AuthProvider> {/* Envelopper les Routes avec AuthProvider */}
//           <main className="w-full">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/presentation" element={<Presentation />} />
//               <Route path="/fil-actualite" element={<FilActualite />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/classements" element={<Classements />} />
//               <Route path="/tournois" element={<Tournois />} />
//               <Route path="/teams" element={<TeamManagement />} />
//               <Route path="/inscription" element={<Inscription />} />
//               <Route path="/connexion" element={<Connexion />} />
//               <Route path="/dashboard-community" element={<DashboardCommunity />} />
//               <Route path="/dashboard-admin" element={<DashboardAdmin />} />
//               {/* <Route path="/create-tournament" element={<CreateTournament />} /> */}
//               <Route path="/tournament" element={<TournamentManagement />} />
//               {/* <Route path="/edit-tournament/:id" element={<EditTournament />} /> */}
//               <Route path="/create-team" element={<CreateTeam />} />
//               <Route path="/edit-team/:id" element={<EditTeam />} />
//               <Route path="/gestion-matchs" element={<MatchManagement />} />
//               <Route path="/dashboard-superadmin" element={<DashboardSuperAdmin />} />
//               <Route path="/superadmin-overview" element={<SuperAdminOverview />} />
//             </Routes>
//           </main>
//         </AuthProvider>
//         <Chatbot />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import Presentation from './pages/Presentation';
import Contact from './pages/Contact';
import FilActualite from './pages/FilActualite';
import Tournois from './pages/Tournois';
import Classements from './pages/Classements';
import DashboardCommunity from './pages/DashboardCommunity';
import TeamManagement from './pages/TeamManagement';
import TournamentManagement from './pages/TournamentManagement';
import MatchManagement from './pages/MatchManagement';
import Chatbot from './components/Chatbot';
import { AuthProvider } from './contexts/AuthContext';
import DashboardSuperAdmin from './pages/DashboardSuperAdmin';
import DashboardAdmin from './pages/DashboardAdmin';
import SuperAdminOverview from './pages/AdminOverview';
import UserManagement from './pages/UserManagement';
import GerantOverview from './pages/GerantOverview';
import PostManagement from './pages/PostManagement';
import CommunityManagerOverview from './pages/CommunityManagerOverview';
import EditTeam from './pages/EditTeam';
import CreateTeam from './pages/CreateTeam';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white w-full">
        <AuthProvider>
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/presentation" element={<Presentation />} />
              <Route path="/fil-actualite" element={<FilActualite />} />
              <Route path="/tournois" element={<Tournois />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/inscription" element={<Inscription />} />
              <Route path="/connexion" element={<Connexion />} />
              <Route path="/classements" element={<Classements />} />
              <Route path="/dashboard-superadmin" element={<DashboardSuperAdmin />} />
              <Route path="/dashboard-admin" element={<DashboardAdmin />} />
              <Route path="/dashboard-community" element={<DashboardCommunity />} />
              <Route path="/superadmin-overview" element={<SuperAdminOverview />} />
              <Route path="/gerant-overview" element={<GerantOverview />} />
              <Route path="/community-overview" element={<CommunityManagerOverview />} />
              <Route path="/post-management" element={<PostManagement />} />
              <Route path="/users" element={<UserManagement />} />
              {/* <Route path="/teams" element={<TeamManagement />}>
                <Route path="create" element={<CreateTeam />} />
                <Route path="edit/:id" element={<EditTeam />} />
              </Route> */}
              <Route path="/teams" element={<TeamManagement />}/>
              <Route path="/teams/create" element={<CreateTeam />} />
              <Route path="/teams/edit/:id" element={<EditTeam />} />
              <Route path="/tournaments" element={<TournamentManagement />}>
                <Route path="create" element={<TournamentManagement />} />
                <Route path="edit/:id" element={<TournamentManagement />} />
              </Route>
              <Route path="/matches" element={<MatchManagement />}>
                <Route path="edit" element={<MatchManagement />} />
                <Route path="edit/:id" element={<MatchManagement />} />
              </Route>
            </Routes>
          </main>
        </AuthProvider>
        <Chatbot />
      </div>
    </BrowserRouter>
  );
};

export default App;
