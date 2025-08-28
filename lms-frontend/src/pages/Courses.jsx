import React from 'react';
import { useSelector } from 'react-redux';
import CourseCard from '../components/CourseCard'; // Assuming CourseCard component exists
import { selectAllCourses } from '../features/courseSlice'; // Selector to get all courses

const Courses = () => {
  const courses = useSelector(selectAllCourses);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;