const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // to cut the whitespaces in the email address (e.g. john doe@example.com -> johndoe@example.com)
        unique: 1 // to prevent using the same email multiple times 
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, // to give a role to the users by numbers (e.g. 0 -> general user, 1 -> admin user)
        default: 0 // default role number: 0
    },
    image: String, // you can directly assign a value without making an object (e.g. 'type') if there is only one to assign

    token: { // to set up access token (for authentication) 
        type: String
    },
    tokenExp: { // Expiry date of token
        type: Number
    }
})

const User = mongoose.model('User', userSchema) // to encapsule the schema with model

module.exports = { User } // to enable other packages to use this DB module