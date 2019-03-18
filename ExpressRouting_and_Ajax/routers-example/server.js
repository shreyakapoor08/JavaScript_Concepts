const express = require('express')
const srv = express()
//const srv = require('express')() //we can also call like this

const teacherRoute = require('./routes/teachers')
const studentRoute = require('./routes/students')

//in our server we will use a middleware present inside express only
srv.use(express.json()) //special middleware that can decode the body of a req and turn it into a js object if the body is encoded in json
srv.use(express.urlencoded({extended: true})) //this middleware can decode the body if the body is in urlencoded format


srv.use('/students', studentRoute)
srv.use('/teachers', teacherRoute)

srv.listen(2233)