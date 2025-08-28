import express from 'express';
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  enrollStudent,
} from '../controllers/courseController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Course routes
router.post('/', authMiddleware, createCourse);
router.get('/', getCourses);
router.get('/:id', getCourseById);
router.put('/:id', authMiddleware, updateCourse);
router.delete('/:id', authMiddleware, deleteCourse);
// router.post('/:id/lectures', authMiddleware, addLecture);
router.post('/:id/enroll', authMiddleware, enrollStudent);

export default router;