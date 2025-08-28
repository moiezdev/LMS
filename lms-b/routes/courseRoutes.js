// routes/courseRoutes.js
import express from "express";
import Course from "../models/Course.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create course (Instructor/Admin only)
router.post("/", protect, authorize("instructor", "admin"), async (req, res) => {
    try {
        const course = await Course.create({ ...req.body, instructor: req.user._id });
        res.status(201).json(course);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all courses (public)
router.get("/", async (req, res) => {
    const courses = await Course.find().populate("instructor", "username email");
    res.json(courses);
});

// Get course by id (public)
router.get("/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate("instructor", "username email");
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.json(course);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update course (Instructor who owns it OR Admin)
router.put("/:id", protect, authorize("instructor", "admin"), async (req, res) => {
    try {
        let course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: "Course not found" });

        // Only allow instructor who created it OR admin
        if (req.user.role !== "admin" && course.instructor.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not allowed" });
        }

        course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(course);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete course
router.delete("/:id", protect, authorize("instructor", "admin"), async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: "Course not found" });

        if (req.user.role !== "admin" && course.instructor.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not allowed" });
        }

        await course.deleteOne();
        res.json({ message: "Course deleted" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;
