import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="nav flex items-center justify-between px-6 lg:px-16 h-[90px] border-b-[1px] border-gray-800">
        <div className="logo">
          <Link to="/">
            <h3 className='text-[25px] font-[700] sp-text cursor-pointer'>ComponentLab</h3>
          </Link>
        </div>
        <div className="nav-links flex items-center gap-4">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg transition-all font-medium ${
              isActive('/') 
                ? 'bg-purple-600 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            Home
          </Link>
          <Link
            to="/component-maker"
            className={`px-4 py-2 rounded-lg transition-all font-medium ${
              isActive('/component-maker') 
                ? 'bg-purple-600 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            Component Maker
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 rounded-lg transition-all font-medium ${
              isActive('/about') 
                ? 'bg-purple-600 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar