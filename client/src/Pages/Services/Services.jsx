import React from 'react';
import { FaSearch, FaBullhorn, FaChartBar, FaHandshake, FaComments, FaMoneyCheckAlt } from 'react-icons/fa';
import { useEffect } from 'react';
const servicesData = [
  {
    title: 'Influencer Discovery',
    icon: <FaSearch className="text-purple-600 text-3xl mb-4" />,
    description: 'Find the perfect influencers using smart filters like niche, audience, followers, and engagement rates.',
  },
  {
    title: 'Campaign Management',
    icon: <FaBullhorn className="text-purple-600 text-3xl mb-4" />,
    description: 'Plan, organize, and run your influencer campaigns from start to finish — all in one dashboard.',
  },
  {
    title: 'Performance Analytics',
    icon: <FaChartBar className="text-purple-600 text-3xl mb-4" />,
    description: 'Track impressions, engagement, reach, and ROI in real-time with detailed analytics.',
  },
  {
    title: 'Secure Payments',
    icon: <FaMoneyCheckAlt className="text-purple-600 text-3xl mb-4" />,
    description: 'Send and receive payments securely with built-in escrow protection and easy tracking.',
  },
  {
    title: 'Direct Messaging',
    icon: <FaComments className="text-purple-600 text-3xl mb-4" />,
    description: 'Communicate directly with brands and influencers for faster decision-making.',
  },
  {
    title: 'Smart Matching',
    icon: <FaHandshake className="text-purple-600 text-3xl mb-4" />,
    description: 'Our algorithm connects brands and influencers with the most relevant partnership opportunities.',
  },
];

const Services = () => {


useEffect(()=>{
  document.title = "Services | Inco"
},[])


  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out text-center"
          >
            {service.icon}
            <h2 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
