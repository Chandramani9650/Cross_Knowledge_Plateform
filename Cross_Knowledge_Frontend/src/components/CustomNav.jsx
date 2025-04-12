
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import assets from "../assets/assets.js";
import { FaBars, FaTimes } from 'react-icons/fa';

export const NAV_ROUTES = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Category", path: "/category" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
    { name: "Profile", path: "/my-profile" }
];


const CustomNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full bg-gray-100 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <img
        className="cursor-pointer w-44 h-20 rounded-2xl shadow-sm"
        src={assets.logo}
        alt="logo"
        onClick={() => navigate("/")}
      />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          {NAV_ROUTES.map((route) => (
            <NavLink
              key={route.name}
              to={route.path}
              className={({ isActive }) =>
                `hover:text-blue-600 transition duration-300 ${isActive ? "text-red-500 border-b-2 border-red-500" : ""}`
              }
            >
              {route.name}
            </NavLink>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <FaBars onClick={() => setShowMenu(true)} className="text-2xl cursor-pointer text-gray-700" />
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {showMenu && (
        <div className="md:hidden fixed inset-0 z-50 bg-white p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-indigo-600">Logo</h1>
            <FaTimes onClick={() => setShowMenu(false)} className="text-2xl cursor-pointer text-gray-700" />
          </div>
          <ul className="flex flex-col gap-4 text-lg font-semibold text-gray-700">
            {NAV_ROUTES.map((route) => (
              <NavLink
                key={route.name}
                to={route.path}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `hover:text-blue-600 transition duration-300 ${isActive ? "text-red-500 border-b-2 border-red-500" : ""}`
                }
              >
                {route.name}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default CustomNav;
