import React from 'react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Students', value: 1245 },
    { title: 'Total Instructors', value: 45 },
    { title: 'Total Courses', value: 52 },
    { title: 'Active Courses', value: 34 },
    { title: 'Pending Approvals', value: 8 },
  ];

  const recentEnrollments = [
    { student: 'John Doe', course: 'React Basics', time: '10 min ago' },
    { student: 'Jane Smith', course: 'Vue Advanced', time: '30 min ago' },
    { student: 'Mike Johnson', course: 'Database Fundamentals', time: '1 hr ago' },
  ];

  const recentActivities = [
    { activity: "Course 'Angular Basics' created", time: '2 hours ago' },
    { activity: "Instructor 'Alice' approved", time: '1 day ago' },
    { activity: "Assignment 'Vue Project' graded", time: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add Course
        </button>
      </header>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
            <h3 className="text-gray-500 dark:text-gray-400">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Charts Placeholder */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Course Enrollment Overview</h3>
        <div className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded">
          Chart Placeholder
        </div>
      </section>

      {/* Recent Enrollments & Activities */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Enrollments */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Enrollments</h3>
          <ul className="space-y-3">
            {recentEnrollments.map((enroll, i) => (
              <li key={i} className="border-b border-gray-200 dark:border-gray-700 pb-2">
                {enroll.student} enrolled in {enroll.course}
                <span className="text-gray-400 text-sm float-right">{enroll.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <ul className="space-y-3">
            {recentActivities.map((act, i) => (
              <li key={i}>
                {act.activity}
                <span className="text-gray-400 text-sm float-right">{act.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
