const mongoose = require("mongoose");

const DescriptionPizza = mongoose.model(
    "DescriptionPizza",
    new mongoose.Schema({
        about: String,
        gramm: String,
        type: String
    })
);

module.exports = DescriptionPizza;
