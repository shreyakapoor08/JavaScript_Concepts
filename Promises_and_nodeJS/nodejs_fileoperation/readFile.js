const fs = require('fs')

fs.readFile(__dirname + '/myfile.txt', function(err, data) {
        if(err) throw err

   // console.log(data) //buffer is a way to read data from file line by line so buffer is output
    console.log(data.toString())
})