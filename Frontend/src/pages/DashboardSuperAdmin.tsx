/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
// import '../styles/SuperAdminDashboard.css';

const SuperAdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/superadmin-overview', { replace: true });
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="content">
        <p>Redirection vers l'aperçu...</p>
      </main>
    </div>
  );
};

export default SuperAdminDashboard;