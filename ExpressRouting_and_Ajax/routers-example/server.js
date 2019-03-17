const srv = require('express')() //we can also call like this

const teacherRoute = require('./routes/teachers')
const studentRoute = require('./routes/students')

srv.use('/students', studentRoute)
srv.use('/teachers', teacherRoute)

srv.listen(2233)