// get the client
const mysql = require('mysql2')

const insert = {
    name: process.argv[2],
    age: parseInt((process.argv[3])),
    city: process.argv[4]
}

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'userone',
    password: 'passone'
})

connection.query(
    `INSERT INTO persons (name, age, city) VALUES (
        '${insert.name}',
        ${insert.age},
        '${insert.city}'
    )`, //we wont write id as it is auto incremented
    //to fetch value of name age and city from process.argv

    function (err, results) {
        if (err) {
            console.error(err)
        } else {
            console.log(results)
            console.log("Inserted successfully")
        }
        connection.close();
    }
)