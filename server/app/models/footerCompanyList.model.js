const mongoose = require("mongoose");

const FooterCompanyList = mongoose.model(
    "FooterCompanyList",
    new mongoose.Schema({
        urlLink: String,
        link: String,
        type: String
    })
);

module.exports = FooterCompanyList;
