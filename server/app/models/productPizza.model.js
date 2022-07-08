const mongoose = require("mongoose");

const ProductPizza = mongoose.model(
    "ProductPizza",
    new mongoose.Schema({
        imgUrl: String,
        imgUrlBig: String,
        imgAlt : String,
        productName: String,
        productPrice: String,
        type: String,
        description: [{
            type: mongoose.Schema.Types.ObjectID,
            ref: "DescriptionPizza"
        }]
    })
);

module.exports = ProductPizza;
