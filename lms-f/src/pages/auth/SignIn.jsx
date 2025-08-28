import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        email,
        password,
      });

      // Save JWT in localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      console.log('Login success:', res.data);

      // Redirect to dashboard (protected page)
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border p-4 m-4 w-[300px] lg:w-[500px]">
        <h1 className="text-3xl font-bold capitalize bg-blue-600 text-white p-4">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <input
            className="border p-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="border p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="bg-blue-600 text-white p-2" type="submit">
            Sign In
          </button>
        </form>

        {error && <p className="text-red-600 mt-2">{error}</p>}

        <div className="flex flex-col items-center mt-4">
          <a className="hover:text-blue-600" href="#">
            Forgot Password
          </a>
          <p className="mt-4">
            Don't have an account?{' '}
            <a className="hover:text-blue-600" href="/signup">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
