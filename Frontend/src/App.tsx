/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import Presentation from './pages/Presentation';
import Contact from './pages/Contact';
import FilActualite from './pages/FilActualite';
import Tournois from './pages/Tournois';
import Classements from './pages/Classements';
import DashboardCommunity from './pages/DashboardCommunity';
import DashboardAdmin from './pages/DashboardAdmin';
import CreateTournament from './pages/CreateTournament';
import EditTournament from './pages/EditTournament';
import TeamManagement from './pages/TeamManagement';
import CreateTeam from './pages/CreateTeam';
import EditTeam from './pages/EditTeam';
import MatchManagement from './pages/MatchManagement';
import DashboardSuperAdmin from './pages/DashboardSuperAdmin';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white w-full">
        <Header />
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
            <Route path="/dashboard-community" element={<DashboardCommunity />} />
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
            <Route path="/create-tournament" element={<CreateTournament />} />
            <Route path="/edit-tournament/:id" element={<EditTournament />} />
            <Route path="/admin/teams" element={<TeamManagement />} />
            <Route path="/create-team" element={<CreateTeam />} />
            <Route path="/edit-team/:id" element={<EditTeam />} />
            <Route path="/gestion-matchs" element={<MatchManagement />} />
            <Route path="/dashboard-superadmin" element={<DashboardSuperAdmin />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </BrowserRouter>
  );
};

export default App;