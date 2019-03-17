const route = require('express').Router()

let students = [
    {name: "Rahul", college: "DTU", year: 'I'},
    {name: "Sahil", college: "NSIT", year: 'II'},
    {name: "Saksham", college: "NIEC", year: 'III'},
    {name: "Palak", college: "NCU", year: 'IV'}

]

route.get('/', (req, res) => res.send(students))
route.get('/:id', (req, res) => res.send(students[req.params.id]))

module.exports = route