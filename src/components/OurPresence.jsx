// src/components/OurPresence.jsx
import React from 'react';

const OurPresence = () => {
  return (
    <div className="min-h-screen bg-[#C39898] flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-center mt-8 mb-4">Our Presence</h1>
      <p className="text-lg text-center mb-8">
        `We are proud to offer our services across various locations to better serve you.`
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <img src="/Images/presence1.png" alt="Location 1" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold">Banglore</h2>
         
          <p>Serving the community with exceptional services.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <img src="/Images/presence2.png" alt="Location 2" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold">Noida</h2>
          <p>Committed to delivering the best services.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <img src="/Images/presence3.png" alt="Location 3" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold">Mumbai</h2>
          <p>Quality and trust you can rely on.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <img src="/Images/presence4.png" alt="Location 4" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold">Chennai</h2>
          <p>Providing top-notch services in your area.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <img src="/Images/cooking.png" alt="Location 5" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold">Indore</h2>
          <p>Meeting your needs with professionalism.</p>
        </div>
      </div>
    </div>
  );
};

export default OurPresence;
