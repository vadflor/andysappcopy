const mongoose = require("mongoose");

const ProductSnaks = mongoose.model(
    "ProductSnaks",
    new mongoose.Schema({
        imgUrl: String,
        imgUrlBig: String,
        imgAlt : String,
        productName: String,
        productPrice: String,
        type: String,
        description: [{
            type: mongoose.Schema.Types.ObjectID,
            ref: "DescriptionSnaks"
        }]
    })
);

module.exports = ProductSnaks;
