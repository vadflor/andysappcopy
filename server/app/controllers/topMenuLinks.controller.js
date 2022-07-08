const db = require("../models");
const TopMenuLinks = db.topMenuLinks;


exports.topMenuLinks = async (req, res) => {
    // {path: 'footerServicesList', options: { sort: { '_id': -1 } } }
    TopMenuLinks.find({}).sort({ '_id': 1 })
        .exec((err, topMenuLinks) => {
            
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!topMenuLinks) {
                return res.status(404).send({ message: "User Not found." });
            }
            res.status(200).send(topMenuLinks);  
        })
};