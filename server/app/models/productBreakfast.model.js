const mongoose = require("mongoose");

const ProductBreakfast = mongoose.model(
    "ProductBreakfast",
    new mongoose.Schema({
        imgUrl: String,
        imgUrlBig: String,
        imgAlt : String,
        productName: String,
        productPrice: String,
        type: String,
        description: [{
            type: mongoose.Schema.Types.ObjectID,
            ref: "DescriptionBreakfast"
        }]
    })
);

module.exports = ProductBreakfast;
