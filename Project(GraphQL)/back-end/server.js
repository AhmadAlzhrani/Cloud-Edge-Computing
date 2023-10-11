const express = require('express')
const expressGraphQL = require('express-graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt,}= require('graphql')
const mongoose = require('mongoose')
const Course = require('./models/courseModel')
const port = 5000
const app = express()
const DB = 'mongodb+srv://admin:admin12345@coe453api.0uddrnp.mongodb.net/?retryWrites=true&w=majority'

const Coourses = Course.find({});


const courses = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'courses',
        fields: () => ({
            name: {
                type: GraphQLString,
                resolve: () => Course.find({Coourses})
            },
            code:{
                type: GraphQLString,
                resolve: () => Course.find({Coourses})
            },
            credits:{
                type: GraphQLInt,
                resolve: () => Course.find({Coourses})
            },
            day:{
                type: GraphQLString,
                resolve: () => Course.find({Coourses})
            },
            time:{
                type: GraphQLString,
                resolve: () => Course.find({Coourses})
            }
        })
    })
})

const addCourse = new GraphQLObjectType({
    name: 'addCourse',
    description: 'Root Mutation',
    fields: () => ({
        addCourse: {
            description: 'Add a course',
            args: {
            name: { type: GraphQLString },
            code: { type: GraphQLString },
            credits: { type: GraphQLInt },
            day:{ type: GraphQLString},
            time:{ type: GraphQLString}
            },
            resolve: (parent, nameArg, codeArg, creditArg, dayArg, timeArg) => {
            const course = {name: nameArg, code: codeArg, credits:creditArg, day: dayArg, time:timeaArg}
            books.push(course)
            return course
            }
        }
    })
})

app.use('/graphql', expressGraphQL.graphqlHTTP ({
    schema: courses,
    //mutation: addCourse,
    graphql: true
}))

mongoose.set('strictQuery',false)
mongoose.connect(DB)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(port, ()=> {
        console.log(`Node server is running on port ${port}`)
    }) 
}).catch((error) => {
    console.log(error)
}) 

