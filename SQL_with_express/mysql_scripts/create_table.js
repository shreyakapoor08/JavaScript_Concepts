// get the client
const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'userone',
    password: 'passone'
})

//simple query
connection.query(
    `CREATE TABLE IF NOT EXISTS persons ( 
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INTEGER NOT NULL,
        city VARCHAR(30)
     ) `, //template strings are valid when they are multiline

    function (err, results) {
    //if there is error
        if(err) {
            console.log(err)
        } else {
            console.log("Table created successfully")
        }
        connection.close(); //to avoid memory leak
    }
)