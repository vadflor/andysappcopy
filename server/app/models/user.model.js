const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: {
            type: String,
            trim: true
        },
        phonenumber: String,
        email: String,
        password: String,
    },
    {
        timestamps: true,
    })
);

module.exports = User;
