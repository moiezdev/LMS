// models/Course.js
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, default: 0 },
    category: { type: String },
    mediaLinks: [{ type: String }], // array for videos, images, docs
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Course", courseSchema);
