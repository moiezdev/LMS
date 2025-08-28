// components/CourseForm.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const CourseForm = ({ course = null, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    mediaLinks: '',
  });

  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title,
        description: course.description,
        price: course.price,
        category: course.category,
        mediaLinks: course.mediaLinks.join(', '),
      });
    }
  }, [course]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const payload = {
      ...formData,
      mediaLinks: formData.mediaLinks.split(',').map((link) => link.trim()),
    };

    try {
      if (course) {
        await axios.put(`http://localhost:3000/courses/${course._id}`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post('http://localhost:3000/courses', payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      onSuccess();
      setFormData({ title: '', description: '', price: '', category: '', mediaLinks: '' });
    } catch (err) {
      console.error(err);
      alert('Error saving course');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-4">
      <h3 className="text-xl font-bold mb-4">{course ? 'Edit Course' : 'Add Course'}</h3>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 mb-2 w-full"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        type="number"
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        name="mediaLinks"
        value={formData.mediaLinks}
        onChange={handleChange}
        placeholder="Media Links (comma separated)"
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {course ? 'Update Course' : 'Add Course'}
      </button>
    </form>
  );
};

export default CourseForm;
