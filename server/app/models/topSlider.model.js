const mongoose = require("mongoose");

const TopSlider = mongoose.model(
    "TopSlider",
    new mongoose.Schema({
        imgUrl: String,
        linkUrl: String,
    })
);

module.exports = TopSlider;
