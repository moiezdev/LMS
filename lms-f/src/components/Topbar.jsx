import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth); // Get user from Redux store

  const handleLogout = () => {
    dispatch(logout()); // Clear store and localStorage
    navigate('/signin'); // Redirect to login
  };

  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-6">
      {/* Left: Username & Role */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold text-gray-800">{user?.username || 'User'}</span>
        <span className="text-sm text-gray-500 capitalize">({user?.role || 'role'})</span>
      </div>

      {/* Right: Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition duration-300"
      >
        <FiLogOut size={18} />
        Logout
      </button>
    </div>
  );
};

export default Topbar;
