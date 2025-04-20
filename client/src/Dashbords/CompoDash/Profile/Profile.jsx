import React from 'react';

const Profile = () => {
  // Dummy data, tu API se bhi fetch kar sakta hai future me
  const influencer = {
    name: "Divyaraj Sinh",
    email: "divyaraj@example.com",
    followers: 22350,
    category: "Tech & Gadgets",
    bio: "Passionate tech reviewer and gadget unboxer on YouTube & Instagram.",
    profileImage: "https://i.pravatar.cc/150?img=7",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
      <div className="flex items-center gap-6 mb-6">
        <img
          src={influencer.profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{influencer.name}</h2>
          <p className="text-gray-500">{influencer.email}</p>
          <p className="text-sm text-indigo-600">{influencer.category}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-700">Bio</h3>
          <p className="text-gray-600">{influencer.bio}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">Followers</h3>
          <p className="text-indigo-600 font-bold text-lg">{influencer.followers.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
