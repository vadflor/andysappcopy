const mongoose = require("mongoose");

const Products = mongoose.model(
    "Products",
    new mongoose.Schema({
        urlLink: String,
        link: String,
        type: String,
        items: [{
            type: mongoose.Schema.Types.ObjectID
        }]
    })
);

module.exports = Products;
