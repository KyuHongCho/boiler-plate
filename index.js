const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser'); // to import body parser 

const config = require('./config/key');

const { User } = require("./models/User"); // to import User DB model

// to enable body parser to analyse and get 'application/x-www-form-urlencoded' info from server
app.use(bodyParser.urlencoded({ extended: true }));

// to enable body parser to analyse and get 'application/json' info from server
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI // not to show ID/PW info (security enhancement)
    // ", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}" are no longer necessary from Mongoose 6
).then(() => console.log('MongoDB connected successfully...'))
    .catch(err => console.log(err))   /* to check whether it is connected successfully 
                                      and show the related messages */


app.get('/', (req, res) => res.send('Hello World! Happy')) // '/' is the root directory

app.post('/register', (req, res) => { // use Postman (Google Chrome app for interacting with/testing HTTP APIs)
    /*get information needed for registration (sign-up) from client (web browser)
    and put it to the DB */

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err }) // if saving to User model fails, show error message (in JSON format) 
        return res.status(200).json({ // if saving to User model succeess, return 200 ('200' is the status number for success)
            success: true
        })
    })
})


app.listen(port, () => console.log('Example app listening on ${port} !'))

