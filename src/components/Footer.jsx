import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-xl font-bold">HomeMaid</h3>
            <p className="text-sm">Providing quality services since 2023.</p>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul>
              <li><a href="/home" className="text-sm hover:underline">Home</a></li>
              <li><a href="/about" className="text-sm hover:underline">About</a></li>
              <li><a href="/services" className="text-sm hover:underline">Services</a></li>
              <li><a href="/contact" className="text-sm hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="text-sm">123 Main Street, Anytown, USA</p>
            <p className="text-sm">Email: info@Homemaid.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
              <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
              <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Our Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
