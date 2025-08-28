// pages/dashboard/Courses.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import CourseForm from '../../components/CourseForm';
import Modal from '../../components/Modal';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCourse, setEditingCourse] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/courses`, {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });
      setCourses(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${import.meta.env.VITE_API_URL}/courses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCourses();
    } catch (err) {
      console.error(err);
      alert('Error deleting course');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></span>
      </div>
    );
  }

  return (
    <div className="relative p-6">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">📚 Courses</h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Add new course"
        >
          ➕ Add Course
        </button>
      </div>

      {/* Add Course Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
        <CourseForm
          onSuccess={() => {
            setIsAddModalOpen(false);
            fetchCourses();
          }}
        />
      </Modal>

      {/* Edit Course Modal */}
      {editingCourse && (
        <Modal isOpen={!!editingCourse} onClose={() => setEditingCourse(null)}>
          <CourseForm
            course={editingCourse}
            onSuccess={() => {
              setEditingCourse(null);
              fetchCourses();
            }}
          />
        </Modal>
      )}

      {/* Course List */}
      {courses.length === 0 ? (
        <p className="text-gray-500 text-lg">No courses available yet. Start by adding one!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 relative border border-gray-100"
            >
              {/* Header */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {course.title}
              </h3>
              <p className="text-gray-600 line-clamp-3 mb-4">{course.description}</p>

              {/* Footer */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-indigo-600 font-medium">${course.price}</span>
                <span className="text-gray-500">👨‍🏫 {course.instructor?.username || 'Unknown'}</span>
              </div>

              {/* Actions */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  onClick={() => setEditingCourse(course)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded-md text-xs shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-xs shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
