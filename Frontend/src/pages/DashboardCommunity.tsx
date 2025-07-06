/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

const CommunityManagerDashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/community-overview', { replace: true });
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <Sidebar  />
      <main className="content">
        <p>Redirection vers le tableau community...</p>
      </main>
    </div>
  );
};

export default CommunityManagerDashboard;
