import Course from '../models/Course.js';
import Enrollment from '../models/Enrollment.js';

// Create a new course
export const createCourse = async (req, res) => {
    const { title, description, price, category, instructor } = req.body;

    try {
        const newCourse = new Course({ title, description, price, category, instructor });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ message: 'Error creating course', error });
    }
};

// Get all courses
export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courses', error });
    }
};

// Get a single course by ID
export const getCourseById = async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching course', error });
    }
};

// Update a course by ID
export const updateCourse = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedCourse = await Course.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: 'Error updating course', error });
    }
};

// Delete a course by ID
export const deleteCourse = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCourse = await Course.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting course', error });
    }
};

// Enroll a student in a course
export const enrollStudent = async (req, res) => {
    const { courseId } = req.params;
    const { studentId } = req.body;

    try {
        const enrollment = new Enrollment({ course: courseId, student: studentId });
        await enrollment.save();
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: 'Error enrolling student', error });
    }
};