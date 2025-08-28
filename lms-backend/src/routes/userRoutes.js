import express from 'express';
import { getAllUsers, changeUserRole, deactivateUser } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to view all users (admin only)
router.get('/', authMiddleware('admin'), getAllUsers);

// Route to change user role (admin only)
router.put('/:id/role', authMiddleware('admin'), changeUserRole);

// Route to deactivate a user (admin only)
router.delete('/:id', authMiddleware('admin'), deactivateUser);

export default router;