const db = require("../models");
const ProductSnaks = db.productSnaks;


exports.productSnaks = async (req, res) => {

    ProductSnaks.find({}).populate("description", "-__v")
        .exec((err, productSnaks) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!productSnaks) {
                return res.status(404).send({ message: "User Not found." });
            }
            res.status(200).send(productSnaks);  
        });
};
