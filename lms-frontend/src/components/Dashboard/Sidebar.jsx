import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full p-5">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2">
          <Link to="/dashboard" className="hover:text-gray-400">Dashboard Home</Link>
        </li>
        <li className="mb-2">
          <Link to="/courses" className="hover:text-gray-400">Courses</Link>
        </li>
        <li className="mb-2">
          <Link to="/profile" className="hover:text-gray-400">Profile</Link>
        </li>
        <li className="mb-2">
          <Link to="/settings" className="hover:text-gray-400">Settings</Link>
        </li>
        <li className="mb-2">
          <Link to="/logout" className="hover:text-gray-400">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;