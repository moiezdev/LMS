# Learning Management System (LMS) Frontend

This is a Learning Management System (LMS) frontend built with React 18, Redux Toolkit, React Router v6, and styled with Tailwind CSS. The application provides a user-friendly interface for students and instructors to manage courses, user authentication, and more.

## Features

- User authentication (login and registration)
- Dashboard for students and instructors
- Course listing and details
- User profile management
- Responsive design using Tailwind CSS
- State management with Redux Toolkit
- Routing with React Router v6

## Project Structure

```
lms-frontend
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── Dashboard
│   │   │   ├── Sidebar.jsx
│   │   │   └── Navbar.jsx
│   │   └── Shared
│   │       ├── Button.jsx
│   │       └── Loader.jsx
│   ├── features
│   │   ├── authSlice.js
│   │   └── courseSlice.js
│   ├── mock
│   │   └── data.js
│   ├── pages
│   │   ├── Auth.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Courses.jsx
│   │   └── Profile.jsx
│   ├── routes
│   │   └── AppRoutes.jsx
│   ├── store
│   │   └── store.js
│   ├── styles
│   │   └── index.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd lms-frontend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Usage

- Navigate to `/auth` for login and registration.
- Access the dashboard at `/dashboard`.
- View available courses at `/courses`.
- Manage your profile at `/profile`.

## Technologies Used

- React 18
- Redux Toolkit
- React Router v6
- Tailwind CSS

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.