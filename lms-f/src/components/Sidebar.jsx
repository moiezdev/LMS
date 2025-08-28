// components/Sidebar.jsx
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { name: 'Home', path: '/dashboard' },
    { name: 'Courses', path: '/dashboard/courses' },
    { name: 'Users', path: '/dashboard/users' },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">LMS Dashboard</h1>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
