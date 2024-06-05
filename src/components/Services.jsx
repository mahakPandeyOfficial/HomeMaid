// src/components/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { id: '1', name: 'Cleaning', description: 'Experience spotless perfection with our thorough cleaning services.', image: '/Images/cleaning.png' },
  { id: '2', name: 'Cooking', description: 'Delight in delicious dishes with our expert cooking services.', image: '/Images/cooking.png' },
  { id: '3', name: 'Babysitting', description: 'Expert babysitting for worry-free moments away from home.', image: '/Images/babysitting.png' },
  // Add more services as needed
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#FFFADD] p-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-black">Services</h1>
        <p className="text-lg text-gray-800">
          Enjoy peace of mind knowing every aspect of your household needs is expertly taken care of by our dedicated team.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={`/service/${service.id}`} className="bg-transparent text-blue-500 px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
