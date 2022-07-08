const db = require("../models");
const ProductPizza = db.productPizza;


exports.productPizza = async (req, res) => {

    ProductPizza.find({}).populate("description", "-__v")
        .exec((err, productPizza) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!productPizza) {
                return res.status(404).send({ message: "User Not found." });
            }
            res.status(200).send(productPizza);  
        });
};
