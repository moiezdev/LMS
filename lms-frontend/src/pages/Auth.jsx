import React from 'react';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const Auth = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Welcome to LMS</h1>
      <div className="w-full max-w-md">
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default Auth;