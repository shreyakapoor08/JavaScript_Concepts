const passport = require('passport')
const Users = require('./db').Users

//serialize user defines how to store user in the session
//it is used to save the data into the session
passport.serializeUser(function (user, done) {
    done(null, user.username)
})

//deserialize user tells how to recover actual user obj from the session
//use to find out which user is saved in the session and find out session based on session name
passport.deserializeUser(function (username, done) {
    //recreate user object
    Users.findOne({
        username: username
    }).then((user) => {
        if (!user) {
            return done(new Error("No such user"))
        }
        return done(null, user)
    }).catch((err) => {
        done(err)
    })
})