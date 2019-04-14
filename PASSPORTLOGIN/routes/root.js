const route = require('express').Router()

route.get('/login', (req, res) => {
    res.render('login')
})
route.get('/signup', (req,res) => {
    res.render('signup')
})
route.post('/login')
route.post('/signup')

exports = module.exports = route