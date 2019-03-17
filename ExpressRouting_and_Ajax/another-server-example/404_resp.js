const express = require('express')
const srv = express()

srv.get('/a', (req, res) => res.send("AAAA"))
srv.get('/b', (req, res) => res.send("BBBB"))

srv.use((req, res) => res.send("<h2>404 not found </h2>")) //we are using srv.use and not get cz we want to handle post and other such requests also

srv.listen(2543)