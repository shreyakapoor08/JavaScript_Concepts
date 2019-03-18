const express = require('express')
const server = express();

const m1 = function (req, res, next) {
    console.log("We are in middleware 1")
    next()  //we treat next() as function
}

const m2 = function (req, res, next) {
    console.log("We are in middleware 2")
    next()
}

const m3 = function (req, res, next) {
    console.log("We are in middleware 3")
    next()
}

server.use(m1)

server.use('/a', m2) // middleware m2 is used only when the path is /a

server.get('/a', function (req, res, next) {
    res.send("Hello world")
}) //middleware is a function that has a req object , res object and next object

server.use(m3) //m1 and m2 run but m3 will not run


server.listen(3232)