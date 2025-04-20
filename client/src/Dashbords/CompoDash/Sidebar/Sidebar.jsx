const Sidebar = ({ setActivePage }) => {
    return (
      <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">Influencer Panel</h2>
        <nav className="space-y-4">
          <button onClick={() => setActivePage("dashboard")} className="block text-left w-full text-gray-700 hover:text-indigo-600">📊 Dashboard</button>
          <button onClick={() => setActivePage("campaigns")} className="block text-left w-full text-gray-700 hover:text-indigo-600">🤝 Campaigns</button>
          <button onClick={() => setActivePage("messages")} className="block text-left w-full text-gray-700 hover:text-indigo-600">💬 Messages</button>
          <button onClick={() => setActivePage("profile")} className="block text-left w-full text-gray-700 hover:text-indigo-600">👤 Profile</button>
        </nav>
      </aside>
    );
  };
  
  export default Sidebar;
  