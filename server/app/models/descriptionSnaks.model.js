const mongoose = require("mongoose");

const DescriptionSnaks = mongoose.model(
    "DescriptionSnaks",
    new mongoose.Schema({
        about: String,
        gramm: String,
        type: String
    })
);

module.exports = DescriptionSnaks;
