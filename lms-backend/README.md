# Learning Management System (LMS) Backend

This is the backend for a Learning Management System (LMS) built using Node.js, Express, MongoDB, Mongoose, and JWT authentication. The application provides a robust API for managing users, courses, and enrollments.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js to build APIs.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: For secure authentication and authorization.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd lms-backend
   ```

3. Install dependencies:
   ```
   yarn install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:
   ```
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   PORT=5000
   ```

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

### Users

- **GET /api/users**: Get all users (admin only).
- **PATCH /api/users/:id/role**: Change user role (admin only).
- **DELETE /api/users/:id**: Deactivate a user (admin only).

### Courses

- **POST /api/courses**: Create a new course (instructor only).
- **GET /api/courses**: Get all courses.
- **GET /api/courses/:id**: Get a specific course.
- **PUT /api/courses/:id**: Update a course (instructor only).
- **DELETE /api/courses/:id**: Delete a course (instructor only).

### Enrollments

- **POST /api/enrollments**: Enroll a student in a course.

## Running the Application

To start the server, run the following command:
```
yarn start
```

The server will run on the port specified in the `.env` file (default is 5000).

## License

This project is licensed under the MIT License. See the LICENSE file for details.