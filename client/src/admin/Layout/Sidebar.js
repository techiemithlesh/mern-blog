import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className='container-fluid'>
      <ul className='menu_container py-4'>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li className={openDropdown === 0 ? 'active' : ''}>
          <div
            className='dropdown-trigger'
            onClick={() => toggleDropdown(0)}
          >
            Projects
          </div>
          {openDropdown === 0 && (
            <ul className='has_menu'>
              <li>
                <Link to='/all-projects'>All Projects</Link>
              </li>
              <li>
                <Link to='/add-project'>Add Project</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={openDropdown === 1 ? 'active' : ''}>
          <div
            className='dropdown-trigger'
            onClick={() => toggleDropdown(1)}
          >
            Blogs
          </div>
          {openDropdown === 1 && (
            <ul className='has_menu'>
              <li>
                <Link to='/all-blogs'>All Blogs</Link>
              </li>
              <li>
                <Link to='/add-blog'>Add Blogs</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={openDropdown === 2 ? 'active' : ''}>
          <div
            className='dropdown-trigger'
            onClick={() => toggleDropdown(2)}
          >
            Notes
          </div>
          {openDropdown === 2 && (
            <ul className='has_menu'>
              <li>
                <Link to='/all-notes'>All Notes</Link>
              </li>
              <li>
                <Link to='/add-note'>Add Notes</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
