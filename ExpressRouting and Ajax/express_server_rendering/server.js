const express = require('express')
const todoRoute = require('./routes/todos')

const srv = express();

srv.set('view engine', 'hbs') //set is used to set certain data in your application
//telling express that my server used hbs as a view engine
//view engine is a library that help to render files
srv.set('views', __dirname + "/views")
srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.use('/todos', todoRoute)

srv.listen(3456)