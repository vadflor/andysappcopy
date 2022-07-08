const mongoose = require("mongoose");

const Location = mongoose.model(
    "Location",
    new mongoose.Schema({
        city: String,
        phone: String,
    })
);

module.exports = Location;
