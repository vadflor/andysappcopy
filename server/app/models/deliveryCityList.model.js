const mongoose = require("mongoose");

const DeliveryCityList = mongoose.model(
    "DeliveryCityList",
    new mongoose.Schema({
        urlLink: String,
        link: String,
        type: String
    })
);

module.exports = DeliveryCityList;
