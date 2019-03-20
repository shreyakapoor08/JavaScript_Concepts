// get the client
const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'userone',
    password: 'passone'
})

connection.query(
    `SELECT * FROM persons`,
    function (err, rows, cols) {
        if (err) {
            console.error(err)
        } else {
            console.log(rows)
            console.log(cols)
        }
        connection.close();
    }
)