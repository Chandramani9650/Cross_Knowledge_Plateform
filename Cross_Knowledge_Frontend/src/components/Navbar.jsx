import React, { useState } from 'react';
import assets from "../assets/assets.js";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // Simulated auth state
  const [token, setToken] = useState(true);
  const [userRole, setUserRole] = useState("both");

  const linkStyle = `relative py-1 hover:text-indigo-600`;
  const underlineStyle = `absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 transition-opacity duration-500 opacity-0 group-hover:opacity-100`;
  
  return (
    <div className='w-full px-4 flex justify-between items-center border-b border-gray-300 mb-5 text-sm py-4'>
      
      {/* Left - Logo */}
      <img
        className="cursor-pointer w-44 h-20 rounded-2xl shadow-sm"
        src={assets.logo}
        alt="logo"
        onClick={() => navigate("/")}
      />
   
      {/* Desktop Nav + Auth/Profile */}
      <div className='hidden md:flex gap-6 items-center'>

        {/* Middle Nav Links */}
        <ul className='flex items-center font-medium gap-6 text-gray-700'>
          <>
            <NavLink to="/about" className="group">
              <li className={linkStyle}>
                ABOUT
                <div className={underlineStyle}></div>
              </li>
            </NavLink>
            <NavLink to="/contact" className="group">
              <li className={linkStyle}>
                CONTACT
                <div className={underlineStyle}></div>
              </li>
            </NavLink>
          </>
        </ul>

        {/* Right - Buttons or Profile */}
        <div className='flex items-center gap-4 relative'>
          {!token ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className='text-white bg-indigo-600 px-6 py-3 rounded-full hover:scale-110 transition-all duration-300'
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className='text-white bg-indigo-600 px-6 py-3 rounded-full hover:scale-110 transition-all duration-300'
              >
                Sign Up
              </button>
            </>
          ) : (
            <div className='flex items-center gap-2 cursor-pointer relative group'>
              <FaUserCircle className="text-2xl text-gray-600" />
              <FaChevronDown className="text-xs mt-1 text-gray-500" />
              <div className='absolute top-10 right-0 text-base font-medium text-gray-700 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-3'>
                  <p onClick={() => navigate("/my-profile")} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Burger Icon - Mobile Only */}
      <div className='md:hidden flex justify-end pr-[12px] w-full'>
        <FaBars
          onClick={() => setShowMenu(true)}
          className="text-2xl cursor-pointer text-gray-700 transition-all duration-300"
        />
      </div>



      {/* Mobile Menu */}
      <div className={`${showMenu ? 'fixed w-full h-full' : 'h-0 w-0'} md:hidden right-0 top-0 z-20 overflow-hidden bg-white transition-all duration-300`}>
        <div className='flex justify-between items-center px-4 py-3 border-b'>
          <img src={assets.logo} alt="logo" className='w-32 rounded-xl shadow' />
          <FaTimes onClick={() => setShowMenu(false)} className='text-2xl cursor-pointer text-gray-700' />
        </div>
        <ul className='flex flex-col items-center gap-6 text-xl font-medium text-zinc-600 py-6'>
          <NavLink to="/" onClick={() => setShowMenu(false)}>Home</NavLink>
          <NavLink to="/Category" onClick={() => setShowMenu(false)}>Category</NavLink>
          <NavLink to="/about" onClick={() => setShowMenu(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setShowMenu(false)}>Contact</NavLink>
          <NavLink to="/signup" className="block md:hidden" onClick={() => setShowMenu(false)}>Sign Up</NavLink>
          <NavLink to="/signin" className="block md:hidden" onClick={() => setShowMenu(false)}>Sign In</NavLink>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
