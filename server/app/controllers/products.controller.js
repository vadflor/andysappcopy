const db = require("../models");
const Products = db.products;


exports.products = async (req, res) => {

    // Products.find({}).sort({ '_id': 1 })
    Products.aggregate( [
        {
            $lookup:
            {
                from: "productpizzas",
                localField: "items",
                foreignField: "_id",
                as: "pizzaItems"
            }
        },
        {
            $lookup:
            {
                from: "productbreakfasts",
                localField: "items",
                foreignField: "_id",
                as: "breakfastItems"
            }
        },
        {
            $lookup:
            {
                from: "productsnaks",
                localField: "items",
                foreignField: "_id",
                as: "snaksItems"
            }
        }
    ] ).sort({ '_id': 1 })
        .exec((err, products) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!products) {
                return res.status(404).send({ message: "Not found." });
            }
            res.status(200).send(products);  
        });
};
