const mongoose = require("mongoose");

const BrandListLogo = mongoose.model(
    "BrandListLogo",
    new mongoose.Schema({
        urlLink: String,
        imgLink: String,
        alt: String,
        className: String
    })
);

module.exports = BrandListLogo;
