const db = require("../models");
const Footer = db.footer;


exports.footer = async (req, res) => {
    // {path: 'footerServicesList', options: { sort: { '_id': -1 } } }
    Footer.find({}).sort({ '_id': 1 })
    .populate({path: 'footerCompanyList', options: { sort: { '_id': 1 } } })
    .populate({path: 'footerDeliveryCityList', options: { sort: { '_id': 1 } } })
    .populate({path: 'footerServicesList', options: { sort: { '_id': 1 } } })
        .exec((err, footer) => {
            
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!footer) {
                return res.status(404).send({ message: "User Not found." });
            }
            res.status(200).send(footer);  
        })
};