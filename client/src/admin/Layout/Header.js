import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      console.log("User Logout");
      toast.success('Successfully logout!', {
        position: 'top-right',
      });
      console.log("Token romoved");
      navigate('/admin/login');
    } catch (error) {
      console.log('Failed to log out:', error.message);
      toast.error('Oops Something wrong!');
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img className="h-10" src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png" alt="Logo" />
          </Link>
        </div>
        <div className="ml-3 relative">
          <div>
            <button
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-solid"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
                alt="User profile"
              />
            </button>
          </div>
          {showProfileDropdown && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
              <div className="py-1 rounded-md bg-white shadow-xs">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                >
                  Log out
                </button>
               
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header