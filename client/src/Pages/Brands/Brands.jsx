import React from 'react';
import Nayka from '../../assets/Brands/Nayka.jpeg'
import mamaearth from '../../assets/Brands/mamaearth.jpeg'
import boat from '../../assets/Brands/Boat.jpeg'
import Myntra from '../../assets/Brands/Myntra.jpeg'
import sugar from '../../assets/Brands/Sugar.jpeg'
import Zometo from '../../assets/Brands/Zometo.jpeg'
import { useEffect } from "react";

const brandsData = [
  {
    name: "Nykaa",
    img: Nayka,
    industry: "Beauty & Cosmetics",
    description: "Partnering with top fashion and beauty influencers to promote makeup and skincare products.",
    followers: "10M+ Customers",
    platform: "Instagram, YouTube",
  },
  {
    name: "Mamaearth",
    img: mamaearth,
    industry: "Personal Care",
    description: "Eco-friendly brand known for influencer marketing across platforms.",
    followers: "8M+ Customers",
    platform: "Instagram, YouTube",
  },
  {
    name: "Boat",
    img: boat,
    industry: "Electronics / Audio Tech",
    description: "Popular among youth for audio products and fitness influencer collabs.",
    followers: "12M+ Customers",
    platform: "Instagram, YouTube",
  },
  {
    name: "Zomato",
    img: Zometo,
    industry: "Food Delivery",
    description: "Runs influencer campaigns and humorous marketing content.",
    followers: "20M+ Users",
    platform: "Instagram, Twitter",
  },
  {
    name: "Myntra",
    img: Myntra,
    industry: "Fashion E-commerce",
    description: "Collaborates with fashion influencers for seasonal campaigns.",
    followers: "15M+ Customers",
    platform: "Instagram, YouTube",
  },
  {
    name: "Sugar Cosmetics",
    img: sugar,
    industry: "Cosmetics",
    description: "Leverages female influencers to showcase makeup tutorials and product reviews.",
    followers: "7M+ Customers",
    platform: "Instagram, YouTube",
  },
];

const Brands = () => {

  useEffect(() => {
    document.title = "Brands | Inco"; // 👈 Yahan page title set ho raha hai
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-gray-800">For Brands</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and collaborate with top influencers to expand your brand’s reach and engagement.
          </p>
        </div>

        {/* Brand Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "🔍",
              title: "Search Influencers",
              desc: "Find influencers based on niche, audience size, and location with powerful filters.",
            },
            {
              icon: "📩",
              title: "Send Requests",
              desc: "Pitch your campaign ideas directly and connect seamlessly via the dashboard.",
            },
            {
              icon: "📊",
              title: "Track Performance",
              desc: "Monitor real-time metrics, engagement data, and ROI in a centralized view.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-bold text-indigo-700 mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-gray-300 mb-16" />

        {/* Top Brands Grid */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Top Indian Brands</h2>
          <p className="mt-3 text-gray-600">
            Discover brands collaborating with influencers to reach new audiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {brandsData.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-indigo-700 mb-1">{brand.name}</h3>
                <p className="text-gray-700 mb-1"><strong>Industry:</strong> {brand.industry}</p>
                <p className="text-gray-700 mb-1"><strong>Platform:</strong> {brand.platform}</p>
                <p className="text-gray-700 mb-2"><strong>Audience:</strong> {brand.followers}</p>
                <p className="text-gray-600 mb-4">{brand.description}</p>
                <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition duration-200">
                  Send Request
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Brands;
