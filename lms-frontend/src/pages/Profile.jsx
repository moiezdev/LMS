import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const progress = useSelector((state) => state.course.progress);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      {user ? (
        <div>
          <h2 className="text-xl">Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <h3 className="mt-4">Course Progress:</h3>
          <ul>
            {progress.map((course) => (
              <li key={course.id} className="mb-2">
                {course.title}: {course.completed ? 'Completed' : 'In Progress'}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;