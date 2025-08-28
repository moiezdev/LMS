import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import './App.css';

const SignUp = lazy(() => import('./pages/auth/SignUp.jsx'));
const SignIn = lazy(() => import('./pages/auth/SignIn.jsx'));
const DashboardLayout = lazy(() => import('./pages/dashboard/DashboardLayout.jsx')); // Example protected page
const DashboardHome = lazy(() => import('./pages/dashboard/DashboardHome.jsx'));
const Courses = lazy(() => import('./pages/dashboard/Courses.jsx'));
const Users = lazy(() => import('./pages/dashboard/Users.jsx'));

function App() {
  return (
    <Suspense
      fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}
    >
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* ✅ Protected route */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<DashboardHome />} />
          <Route path="courses" element={<Courses />} />
          <Route path="users" element={<Users />} />
          {/* <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
