const db = require("../models");
const BottomSlider = db.bottomSlider;


exports.bottomSlider = async (req, res) => {
    BottomSlider.find({})
        .exec((err, bottomSlider) => {
            
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!bottomSlider) {
                return res.status(404).send({ message: "User Not found." });
            }
            res.status(200).send(bottomSlider);  
        })
};