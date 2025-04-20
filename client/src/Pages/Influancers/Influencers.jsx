import React, { useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import KomalPandey from '../../assets/KomalPandey.jpg';
import Ranveer from '../../assets/Ranveer.jpeg';
import carry from '../../assets/CarryMinati.jpeg';
import Prajakta from '../../assets/Prajakta Koli.jpeg';
import Masoom from '../../assets/Masoom Minawala.jpeg';
import Guruji from '../../assets/Technical Guruji.jpeg';


const influencerData = [
  {
    name: "Komal Pandey",
    img: KomalPandey,
    platform: "Instagram, YouTube",
    category: "Fashion & styling expert, bold content",
    followers: "1M+",
  },
  {
    name: "Ranveer Allahbadia",
    img: Ranveer,
    platform: "YouTube, Instagram",
    category: "Fitness + Motivation + Podcast",
    followers: "4M+",
  },
  {
    name: "CarryMinati",
    img: carry,
    platform: "YouTube",
    category: "Gaming + Comedy",
    followers: "40M+",
  },
  {
    name: "Prajakta Koli",
    img: Prajakta,
    platform: "YouTube, Instagram",
    category: "Comedy + Lifestyle",
    followers: "8M+",
  },
  {
    name: "Masoom Minawala",
    img: Masoom,
    platform: "Instagram",
    category: "Global fashion & luxury influencer",
    followers: "1.2M+",
  },
  {
    name: "Technical Guruji",
    img: Guruji,
    platform: "YouTube",
    category: "Tech Reviews & Unboxings",
    followers: "23M+",
  },
];

const Influencers = () => {

useEffect(()=>{
  document.title = "Influencers | Inco"
},[])

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-2">Top Indian Influencers</h1>
        <p className="text-lg text-gray-600 mb-25">Explore collaboration opportunities with India's top digital creators</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-25">
          {influencerData.map((influencer, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group"
            >
              <div className="flex justify-center -mt-20  cursor-pointer">
                <img
                  src={influencer.img}
                  alt={influencer.name}
                  className="w-32 h-32 object-cover rounded-full ring-4 ring-white shadow-md transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-semibold text-gray-900">{influencer.name}</h3>
                <p className="text-indigo-500 font-medium mt-1">{influencer.platform}</p>
                <p className="text-gray-700 mt-2">{influencer.category}</p>
                <p className="text-sm text-gray-500 mt-1"><b>Followers:</b> {influencer.followers}</p>

                <button className="mt-5 w-full py-2 px-4 cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-md transition duration-200">
                  Schedule Meeting
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Influencers;
