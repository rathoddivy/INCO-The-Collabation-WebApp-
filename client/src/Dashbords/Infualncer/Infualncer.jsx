import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


import Slidebar from '../CompoDash/Sidebar/Sidebar'
import Header from '../CompoDash/Header/Header';
import StatsCards from '../CompoDash/StatsCards/StatsCards';
import CampaignsList from '../CompoDash/CampaignsList.jsx/CampaignsList';
import Profile from '../CompoDash/Profile/Profile';
import Messages from '../CompoDash/Messege/Messge';

const Infualncer = () => {
  const location = useLocation();
  const { name } = location.state || {};

  const [activePage, setActivePage] = useState('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <>
            <StatsCards />
            <CampaignsList />
          </>
        );
      case 'campaigns':
        return <div className="text-xl"><CampaignsList /></div>;
      case 'messages':
        return <div className="text-xl"><Messages /></div>;
      case 'profile':
        return <div className="text-xl"><Profile/></div>;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Slidebar setActivePage={setActivePage} />

      <main className="flex-1 p-6">
        <Header name={name} />
        {renderContent()}
      </main>
    </div>
  );
};

export default Infualncer;




