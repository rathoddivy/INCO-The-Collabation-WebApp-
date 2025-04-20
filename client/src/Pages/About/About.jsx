import React, { useEffect } from 'react';
import './About.css';
import { CgProfile } from "react-icons/cg";

const teamMembers = [
  {
    name: "DivyarajSinh Rathod",
    role: "Full Stack Developer & Co-Founder",
    description: "Loves building user-focused platforms and making brand–influencer connections smoother with tech."
  },
  {
    name: "Yash Vaishanv",
    role: "Sr. Full Stack Developer",
    description: "An expert in backend systems and frontend harmony — always focused on scalable architecture."
  },
  {
    name: "Sisodiya Aditya",
    role: "Junior Full Stack Developer",
    description: "Keen learner and creative problem solver with a love for innovative and dynamic web experiences."
  },
  {
    name: "Rai Sidharth",
    role: "Junior Full Stack Developer",
    description: "Focused on crafting seamless UI/UX and diving deep into APIs and integrations."
  },
];

const About = () => {
  useEffect(() => {
    document.title = "About | Inco";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-6 tracking-tight">About Us</h1>

        <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
          We're on a mission to connect innovative brands with passionate influencers.
          Our platform removes the friction and helps both sides grow through smooth, impactful collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-indigo-500">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">Our Mission 🚀</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              To empower influencers and brands with the right tools for impactful and transparent collaborations.
              We aim to create a trusted ecosystem where creativity meets commerce.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-indigo-500">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">Why Choose Us? 🤝</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Intuitive and elegant user experience</li>
              <li>Real-time analytics and performance tracking</li>
              <li>Curated and verified community</li>
              <li>Encrypted chats and secure payments</li>
            </ul>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Meet Our Team 👨‍💻👩‍💻</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
              >
                <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                  <CgProfile className="w-20 h-20 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-2 italic">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
