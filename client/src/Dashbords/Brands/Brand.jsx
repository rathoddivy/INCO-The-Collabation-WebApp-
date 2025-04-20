import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


import React from 'react'

const brand = () => {
  const location = useLocation();
  const { name } = location.state || {};


  return (
    <div>
      <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">Brand Panel</h2>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-700 hover:text-indigo-600">📊 Dashboard</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">🤝 Campaigns</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">💬 Messages</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">👤 Profile</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Topbar */}
        <header className="mb-6">
        {name ? `Welcome, Brand ${name}!` : 'Welcome, Brand!'}
          <p className="text-gray-500">Here's an overview of your campaigns.</p>
        </header>

        {/* Dashboard Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">Active Campaigns</h3>
            <p className="text-2xl mt-2 text-indigo-600">4</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">Influencer Requests</h3>
            <p className="text-2xl mt-2 text-indigo-600">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">Pending Payments</h3>
            <p className="text-2xl mt-2 text-red-500">₹8,400</p>
          </div>
        </section>
      </main>
    </div>
    </div>
  )
}

export default brand
