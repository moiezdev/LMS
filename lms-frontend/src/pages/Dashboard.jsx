import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../components/Dashboard/Sidebar';
import Navbar from '../components/Dashboard/Navbar';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const courses = useSelector((state) => state.courses.enrolledCourses);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar user={user} />
        <div className="p-4">
          <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
          <h2 className="mt-4 text-xl">Your Enrolled Courses</h2>
          <ul className="mt-2">
            {courses.map((course) => (
              <li key={course.id} className="border-b py-2">
                {course.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;