const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose')
const Course = require('./courseModel')


app.use(express.json())
app.use(express.urlencoded({extended: false}))


// fetch all courses
app.get('/', async(req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.set('strictQuery',false)
mongoose.connect('mongodb+srv://admin:admin12345@coe453api.0uddrnp.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3001, ()=> {
        console.log(`Node server is running on port ${port}`)
    })  
}).catch((error) => {
    console.log(error)
})
