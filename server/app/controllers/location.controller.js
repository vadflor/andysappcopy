const db = require("../models");
const Location = db.location;


exports.location = async (req, res) => {
    // {path: 'footerServicesList', options: { sort: { '_id': -1 } } }
    Location.find({}).sort({ '_id': 1 })
        .exec((err, location) => {
            
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!location) {
                return res.status(404).send({ message: "User Not found." });
            }
            res.status(200).send(location);  
        })
};