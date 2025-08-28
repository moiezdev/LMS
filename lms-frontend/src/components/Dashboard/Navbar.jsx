import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg">LMS Dashboard</div>
      <div className="flex items-center">
        {user && (
          <span className="text-white mr-4">{user.username}</span>
        )}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;