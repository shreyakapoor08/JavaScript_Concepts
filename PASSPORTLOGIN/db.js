const sequelize = require('sequelize')
const db = new sequelize(
    'userdb',
    'userdb',
    'userdb',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

const Users = db.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNULL: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
})

exports = module.exports = {
    db,
    Users
}