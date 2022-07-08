const mongoose = require("mongoose");

const DescriptionBreakfast = mongoose.model(
    "DescriptionBreakfast",
    new mongoose.Schema({
        about: String,
        gramm: String,
        type: String
    })
);

module.exports = DescriptionBreakfast;
