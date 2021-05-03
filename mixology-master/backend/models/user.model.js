const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            // validate: {
            //     validator: username => User.doesNotExist({ username }),
            //     message: "Username already exists"
            //   },
            unique: true,
            trim: true,
            minlength: 3
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // validate: {
            //     validator: email => User.doesNotExist({ email }),
            //     message: "Email already exists"
            //   }
        },
        password: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    {timestamps: true}
);

const User = mongoose.model('User',userSchema);

module.exports = User;