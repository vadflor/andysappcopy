const db = require("../models");
const ProductBreakfast = db.productBreakfast;


exports.productBreakfast = async (req, res) => {

    ProductBreakfast.find({}).populate("description")
        .exec((err, productBreakfast) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!productBreakfast) {
                return res.status(404).send({ message: "User Not found." });
            }
            res.status(200).send(productBreakfast);  
        });
};
