const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    enrollmentStatus: {
        type: String,
        enum: ['Open', 'Closed', 'In Progress'],
        required: true
    },
    duedate: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        required: true
    },
    isComplete: {
        type: Boolean,
        required: true
    },    
    thumbnail: {
        type: String,
        required: true
    },
    duration: String,
    schedule: String,
    location: String,
    prerequisites: [String],
    syllabus: [{
        week: Number,
        topic: String,
        content: String
    }],
    students: [{
        id: Number,
        name: String,
        email: String
    }]
});

// Create the Course model using the schema
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
