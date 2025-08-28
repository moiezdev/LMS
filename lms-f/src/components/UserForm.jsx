import { useState } from 'react';
import axios from 'axios';

const UserForm = ({ user, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || 'student',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (user) {
        await axios.put(`${import.meta.env.VITE_API_URL}/users/${user._id}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/users`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      onSuccess();
    } catch (err) {
      console.error(err);
      alert('Error saving user');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-2xl font-semibold mb-4">{user ? 'Edit User' : 'Add User'}</h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      {/* Role */}
      <div>
        <label className="block text-sm font-medium">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Password (only for new users or reset) */}
      {!user && (
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg shadow hover:scale-105 transition-transform duration-300"
      >
        {user ? 'Update User' : 'Create User'}
      </button>
    </form>
  );
};

export default UserForm;
