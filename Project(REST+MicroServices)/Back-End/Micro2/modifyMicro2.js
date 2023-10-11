const express = require('express')
const app = express()
const port = 3002
const mongoose = require('mongoose')
const Course = require('./courseModel')


app.use(express.json())
app.use(express.urlencoded({extended: false}))


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
mongoose.connect('mongodb+srv://admin:admin12345@coe453api.0uddrnp.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3002, ()=> {
        console.log(`Node server is running on port ${port}`)
    })  
}).catch((error) => {
    console.log(error)
})
