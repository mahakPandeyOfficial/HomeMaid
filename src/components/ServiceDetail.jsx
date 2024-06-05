// src/components/ServiceDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const services = [
  { id: '1', name: 'Cleaning', description: 'Experience spotless perfection with our thorough cleaning services.', details: 'Detailed info about Cleaning.' },
  { id: '2', name: 'Cooking', description: 'Delight in delicious dishes with our expert cooking services.', details: 'Detailed info about Cooking.' },
  { id: '3', name: 'Babysitting', description: 'Expert babysitting for worry-free moments away from home.', details: 'Detailed info about Babysitting.' },
  // Add more services as needed
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold mb-4">{service.name}</h1>
      <p className="text-lg text-gray-800 mb-4">{service.description}</p>
      <p className="text-gray-600">{service.details}</p>
      <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => alert('Service booked!')}>
        Book this service
      </button>
    </div>
  );
};

export default ServiceDetail;
