const CampaignsList = () => {
    return (
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Campaigns</h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">Ongoing Campaigns</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b pb-3">
              <span>Brand XYZ - Fashion Collaboration</span>
              <span className="text-green-500 font-semibold">Active</span>
            </li>
            <li className="flex justify-between items-center border-b pb-3">
              <span>Brand ABC - Product Review</span>
              <span className="text-yellow-500 font-semibold">Pending</span>
            </li>
            <li className="flex justify-between items-center pb-3">
              <span>Brand DEF - Fitness Promotion</span>
              <span className="text-red-500 font-semibold">Declined</span>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default CampaignsList;
  