const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    iconPath: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;