const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kyuhong-cho:root@boilerplate.vnyfu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    // ", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}" are no longer necessary from Mongoose 6
).then(() => console.log('MongoDB connected successfully...'))
    .catch(err => console.log(err))   /* to check whether it is connected successfully 
                                      and show the related messages */

app.get('/', (req, res) => res.send('Hello World!')) // '/' is the root directory

app.listen(port, () => console.log('Example app listening on ${port} !'))

