const mongoose = require("mongoose");

const TopMenuLinks = mongoose.model(
    "TopMenuLinks",
    new mongoose.Schema({
        urlLink: String,
        link: String,
    })
);

module.exports = TopMenuLinks;
