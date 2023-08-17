import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; 

function Sidebar(props) {
  const [openDropdown, setOpenDropdown] = useState([false, false, false]); // Use an array for managing open/closed state

  const toggleDropdown = (index) => {
    const updatedDropdownState = [...openDropdown];
    updatedDropdownState[index] = !updatedDropdownState[index];
    setOpenDropdown(updatedDropdownState);
  };

  return (
    <div className="w-64 bg-gray-800 h-screen">
      <div className="text-white text-xl font-semibold py-3 px-6 mb-3 uppercase">Admin Panel</div>
      <ul className="text-gray-500">
        <li className="py-2 px-6">
          <Link to="/admin/dashboard" className="block hover:text-white">Dashboard</Link>
        </li>
        <li className="py-2 px-6">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown(0)}>
            <span className="block hover:text-white">Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-gray-400 transform ${openDropdown[0] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ul className={`text-gray-500 ml-6 ${openDropdown[0] ? 'block' : 'hidden'}`}>
            <li className="py-2">
              <Link to="/admin/projects" className="block hover:text-white">View Projects</Link>
            </li>
            <li className="py-2">
              <Link to="/admin/project-add" className="block hover:text-white">Create New Project</Link>
            </li>
          </ul>
        </li>
        <li className="py-2 px-6">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown(1)}>
            <span className="block hover:text-white">Blogs</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-gray-400 transform ${openDropdown[1] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ul className={`text-gray-500 ml-6 ${openDropdown[1] ? 'block' : 'hidden'}`}>
            <li className="py-2">
              <Link to="/admin/projects" className="block hover:text-white">View Blogs</Link>
            </li>
            <li className="py-2">
              <Link to="/admin/projects/new" className="block hover:text-white">Create New Blog</Link>
            </li>
          </ul>
        </li>
        <li className="py-2 px-6">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown(2)}>
            <span className="block hover:text-white">Notes</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-gray-400 transform ${openDropdown[2] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ul className={`text-gray-500 ml-6 ${openDropdown[2] ? 'block' : 'hidden'}`}>
            <li className="py-2">
              <Link to="/admin/projects" className="block hover:text-white">View Notes</Link>
            </li>
            <li className="py-2">
              <Link to="/admin/projects/new" className="block hover:text-white">Create New Notes</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
