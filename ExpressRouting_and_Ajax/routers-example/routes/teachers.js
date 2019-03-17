const route = require('express').Router() //route is a middleware itself, we are able to create more middlewares

let teachers = [
    {name: "Arnav", subject: "Web Dev"},
    {name: "Prateek", subject: "Competitive Coding"}
]

route.get('/', (req, res) => res.send(teachers))
route.get('/add', (req, res) => {
    teachers.push({
        name: req.query.name,
        subject: req.query.subject
    })
    res.send(teachers)
})
route.get('/:id', (req, res) => res.send(teachers[req.params.id]))


module.exports = route