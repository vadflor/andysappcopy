const mongoose = require("mongoose");

const BottomNavBar = mongoose.model(
    "BottomNavBar",
    new mongoose.Schema({
        urlLink: String,
        link: String,
        dropDownMenu: [{ 
            type: mongoose.Schema.Types.ObjectID 
        }]
    })
);

module.exports = BottomNavBar;
