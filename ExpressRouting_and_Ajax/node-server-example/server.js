const express = require('express')
const server = express()

server.get('/', function (req, res, next) {
    //when server receives get req on particular path say '\'
    //it is going to need HTTP handeler which is a function with some argument
    // req is the request that is come from the client to the server
    //res is the response that the server will sent to the client
    //next is middleware
    console.log("yo")
    res.send("Hello world")

})

server.get('/greet/:tod', function (req, res, next) {
    let tod = 'Morning'
    switch(req.params.tod) {
        case 'evening' : tod = "Evening"; break;
        case 'morning' : tod = "Morning"; break;
    }
    let greeting = "Good " + tod + ", " + req.query.name //in browser localhost:2121/greet/evening?name="shreya"
    //agar hamari string ke ander koi part of the url ':' se defined tha toh vo ek variable ban gaya
    //name is not a string name it is variable and it is available inside req.params.name
    //req.params.name is used if we have server.get(/greet/:tod/:name
    res.send(greeting)
})

//to send html pages
server.get('/html', function (req, res, next) {
    res.send(`
    <html>
        <body>
        <h1>
        This is a HTML page
</h1>
<i>
This looks really nice
</i>
</body>
    </html>
    `) //we can write multiline strings with help of backticks
})

server.listen(2121) //to open the port 2121, server needs to start listening they cant run on their own and listen to any kind of req coming to the port
