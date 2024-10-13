import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa'; // Import film icon

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClass = ({ isActive }) => 
    isActive
      ? "bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium"
      : "text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black bg-opacity-90' : 'bg-gradient-to-b from-black to-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-red-600 text-2xl font-bold flex items-center">
          <FaFilm className="mr-2" />
          <span className="font-cinzel">Cinema Jaya Film</span>
        </div>
        <ul className="flex space-x-4">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/MovieGallery" className={navLinkClass}>Movies</NavLink></li>
          <li><NavLink to="/showtimes" className={navLinkClass}>Showtimes</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
