const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8080
const Course = require('./models/courseModel')
const DB = 'mongodb+srv://admin:admin12345@coe453api.0uddrnp.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json())
app.use(express.urlencoded({extended: false}))


//Routes
// fetch all courses
app.get('/courses', async(req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// add new course
app.post('/courses', async(req, res) => {
    try {
        const course = await Course.create(req.body)
        res.status(200).json(course);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

mongoose.set('strictQuery',false)
mongoose.connect(DB)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(8080, ()=> {
        console.log(`Node server is running on port ${port}`)
    })  
}).catch((error) => {
    console.log(error)
})