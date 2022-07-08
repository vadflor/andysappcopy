const mongoose = require("mongoose");

const Services = mongoose.model(
    "Services",
    new mongoose.Schema({
        urlLink: String,
        link: String,
        type: String
    })
);

module.exports = Services;
