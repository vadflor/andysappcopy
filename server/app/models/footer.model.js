const mongoose = require("mongoose");

const Footer = mongoose.model(
    "Footer",
    new mongoose.Schema({
        footerNavTitle: String,
        footerCompanyList: [{
            type: mongoose.Schema.Types.ObjectID,
            ref:"FooterCompanyList",
            // ref: "DeliveryCityList",
            // ref: "Services"
        }],
        footerDeliveryCityList: [{
            type: mongoose.Schema.Types.ObjectID,
            // ref:"FooterCompanyList",
            ref: "DeliveryCityList",
            // ref: "Services"
        }],
        footerServicesList: [{
            type: mongoose.Schema.Types.ObjectID,
            // ref:"FooterCompanyList",
            // ref: "DeliveryCityList",
            ref: "Services"
        }]
        
    })
);

module.exports = Footer;
