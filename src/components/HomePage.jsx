import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F1E5D1]">
      <header className="flex justify-between items-center p-4 font-serif font-semibold">
        <img src="/Images/homemaiLogo.png" alt="Home Maid Logo" className="h-12" /><h1 className='text-2xl font-serif font-extrabold '>HOMEMAID</h1>
        <nav className="flex-1 flex justify-center">
          <div className="flex space-x-10">
            <Link to="/" className="text-black hover:text-gray-600">Home</Link>
            <Link to="/contact" className="text-black hover:text-gray-600">Contact</Link>
            <Link to="/services" className="text-black hover:text-gray-600">Services</Link>
            <Link to="/presence" className="text-black hover:text-gray-600">Our Presence</Link>
          </div>
        </nav>
        <a href="/authpage" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Register Now</a>
      </header>

      <main className="flex flex-col lg:flex-row items-center justify-center p-8 lg:p-24">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-6xl font-bold mb-4">Welcome to the Home-Maid Services</h1>
          <p className="text-lg mb-8">
            We will find maid for you,<br />
            Faster Than Your Neighbourhood Aunt!!
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700">
            All services
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/Images/Homepage1.png"
            alt="Home Maid Services"
            className="rounded-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;