const mongoose = require('mongoose')
const courseSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter course name"]
        },
        code:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        credits: {
            type: Number,
            required: true
        },
        day: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        instructor: {
            type: String,
            required: false
        }

    },
    {
        timestamps: true
    }
)

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;