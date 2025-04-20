import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    document.title = "Home | Inco"; // 👈 Yahan page title set ho raha hai
  }, []);
 

  return (




    
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Welcome to <span className="text-yellow-300">Inco</span></h1>
        <p className="text-xl font-medium mb-4">Where brands & influencers grow together 🤝</p>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed mb-8">
          Your gateway to powerful collaborations. Whether you're an influencer looking to expand your reach,
          or a brand searching for the perfect face to showcase your vision — you're in the right place. Track
          campaigns, manage budgets, and build lasting partnerships — all in one secure and easy-to-use platform.
        </p>
        <p className="text-xl font-semibold italic mb-10">✨ Let’s create something amazing, together ✨</p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a href="/brands" className="bg-yellow-300 text-indigo-800 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300">Explore Brands</a>
          <a href="/influencers" className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">Explore Influencers</a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-16 text-indigo-700">How It Works 🚀</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">1️⃣ Sign Up</h3>
            <p className="mb-4">Create your account as a <strong>Brand</strong> or <strong>Influencer</strong>.</p>
            <b>Take your first step toward growth today!</b>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">2️⃣ Build Profile</h3>
            <p className="mb-4">Add details like your audience insights or brand story.</p>
            <b>Make your first impression stand out! 👌</b>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">3️⃣ Start Collaborating</h3>
            <p className="mb-4">Send/accept requests, chat, and make deals happen.</p>
            <b>Turn connections into real collaborations. 🌟</b>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-8 text-center bg-white">
        <h2 className="text-4xl font-bold text-indigo-700 mb-12">Our Services 🛠️</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div className="p-6 bg-gray-50 shadow-xl rounded-xl">
            <h4 className="text-lg font-bold mb-2">🎯 Campaign Management</h4>
            <p>Launch, monitor, and optimize influencer campaigns.</p>
          </div>
          <div className="p-6 bg-gray-50 shadow-xl rounded-xl">
            <h4 className="text-lg font-bold mb-2">💬 Chat & Messaging</h4>
            <p>Seamless and direct communication tools.</p>
          </div>
          <div className="p-6 bg-gray-50 shadow-xl rounded-xl">
            <h4 className="text-lg font-bold mb-2">📊 Analytics</h4>
            <p>Track performance, ROI, and campaign metrics.</p>
          </div>
          <div className="p-6 bg-gray-50 shadow-xl rounded-xl">
            <h4 className="text-lg font-bold mb-2">💳 Secure Payments</h4>
            <p>Easy payouts and transaction tracking built-in.</p>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-24 px-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-12">Who Can Join? 🤔</h2>
        <div className="flex flex-wrap justify-center gap-14">
          <div className="w-80 bg-white rounded-xl shadow-lg p-6 text-left">
            <h3 className="text-2xl font-bold mb-4 text-purple-700">👑 Brands</h3>
            <p className="mb-4">
              Discover a curated network of creators. Filter by niche, audience & more. 
              Collaborate confidently with insights, budgets, and chat — all in one place.
            </p>
            <b>✨ Start building brand magic today. ✨</b>
          </div>
          <div className="w-80 bg-white rounded-xl shadow-lg p-6 text-left">
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">📱 Influencers</h3>
            <p className="mb-4">
              Turn your passion into real opportunities. Connect with brands that fit your vibe, 
              manage deals directly, and grow your impact — your way.
            </p>
            <b>🌟 Your next collab starts now! 🌟</b>
          </div>
        </div>
      </section>

     
    
    </div>
  );
};

export default Home;