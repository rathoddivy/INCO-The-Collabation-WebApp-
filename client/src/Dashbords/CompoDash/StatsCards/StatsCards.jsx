const StatsCards = () => {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">Active Campaigns</h3>
          <p className="text-2xl mt-2 text-indigo-600">3</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">Pending Payments</h3>
          <p className="text-2xl mt-2 text-red-500">₹6,200</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">Followers</h3>
          <p className="text-2xl mt-2 text-indigo-600">22,350</p>
        </div>
      </section>
    );
  };
  
  export default StatsCards;
  