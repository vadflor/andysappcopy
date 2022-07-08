const mongoose = require("mongoose");

const BottomSlider = mongoose.model(
    "BottomSlider",
    new mongoose.Schema({
        imgUrl: String,
        title: String,
        about: String
    })
);

module.exports = BottomSlider;
