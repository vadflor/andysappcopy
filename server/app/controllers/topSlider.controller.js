const db = require("../models");
const TopSlider = db.topSlider;


exports.topSlider = async (req, res) => {
    TopSlider.find({})
        .exec((err, topSlider) => {
            
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!topSlider) {
                return res.status(404).send({ message: "User Not found." });
            }
            res.status(200).send(topSlider);  
        })
};