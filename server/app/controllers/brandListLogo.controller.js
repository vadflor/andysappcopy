const db = require("../models");
const BrandListLogo = db.brandListLogo;


exports.brandListLogo = async (req, res) => {
    // {path: 'footerServicesList', options: { sort: { '_id': -1 } } }
    BrandListLogo.find({}).sort({ '_id': 1 })
        .exec((err, brandListLogo) => {
            
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!brandListLogo) {
                return res.status(404).send({ message: "User Not found." });
            }
            res.status(200).send(brandListLogo);  
        })
};