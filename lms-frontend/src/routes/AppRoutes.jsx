import { Routes, Route } from 'react-router-dom';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import Courses from '../pages/Courses';
import Profile from '../pages/Profile';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      {isAuthenticated ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
        </>
      ) : (
        <Route path="*" element={<Auth />} />
      )}
    </Routes>
  );
};

export default AppRoutes;