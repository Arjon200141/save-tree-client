import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="navbar bg-gradient-to-r from-white to-[#339634]">
      {/* Mobile menu button and logo */}
      <div className="navbar-start">
        <div className="dropdown" ref={menuRef}>
          <button 
            className="btn btn-ghost lg:hidden"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          <ul
            className={`menu menu-sm dropdown-content space-y-2 mt-3 p-2 shadow bg-base-100 rounded-box w-52 fixed z-50 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <li>
              <NavLink 
                to="/" 
                className="text-lg pl-4 bg-[#e1e1e1] rounded-full font-semibold" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className="text-lg pl-4 bg-[#e1e1e1] rounded-full font-semibold" 
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/tree-details" 
                className="text-lg pl-4 bg-[#e1e1e1] rounded-full font-semibold" 
                onClick={() => setIsMenuOpen(false)}
              >
                Tree Details
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className="text-lg pl-4 bg-[#e1e1e1] rounded-full font-semibold" 
                onClick={() => setIsMenuOpen(false)}
              >
                Our Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className="text-lg pl-4 bg-[#e1e1e1] rounded-full font-semibold" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact US
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/join" 
                className="text-lg pl-4 bg-[#e1e1e1] rounded-full font-semibold" 
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </NavLink>
            </li>
          </ul>
        </div>
        <img 
          src="https://i.ibb.co/Kj5dNvzH/STF-Logo-2025.png" 
          alt="Logo" 
          className="h-20 w-20" 
        />
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 bg-white px-6 py-3 rounded-full z-10">
          <li>
            <NavLink to="/" className="text-lg bg-[#e1e1e1] rounded-full font-semibold">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-lg bg-[#e1e1e1] rounded-full font-semibold">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/tree-details" className="text-lg bg-[#e1e1e1] rounded-full font-semibold">
              Tree Details
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="text-lg bg-[#e1e1e1] rounded-full font-semibold">
              Our Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-lg bg-[#e1e1e1] rounded-full font-semibold">
              Contact US
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Desktop join button */}
      <div className="navbar-end hidden lg:flex">
        <NavLink 
          to="/join" 
          className="btn text-lg rounded-full px-6 bg-[#6f6f6f] text-white shadow-none py-6"
        >
          Join Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;