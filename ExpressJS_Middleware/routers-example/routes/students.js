const route = require('express').Router()

let students = [
    {name: "Rahul", college: "DTU", year: 'I'},
    {name: "Sahil", college: "NSIT", year: 'II'},
    {name: "Saksham", college: "NIEC", year: 'III'},
    {name: "Palak", college: "NCU", year: 'IV'}

]

route.get('/', (req, res) => res.send(students))
route.post('/', (req, res) => {
    students.push({
        name: req.body.name, //name is expected to come in body
        college: req.body.college,
        year: req.body.year
    })
})
route.get('/:id', (req, res) => res.send(students[req.params.id]))

module.exports = route