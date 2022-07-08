const db = require("../models");
const BottomNavBar = db.bottomNavBar;


exports.bottomNavBar = async (req, res) => {
//{path: 'dropDownMenu', options: { sort: { '_id': 1 } } } 


    // BottomNavBar.find({}).populate()
    //     .exec((err, bottomNavBar) => {
    //         if (err) {
    //             res.status(500).send({ message: err });
    //             return;
    //         }

    //         if (!bottomNavBar) {
    //             return res.status(404).send({ message: "User Not found." });
    //         }
    //         res.status(200).send(bottomNavBar);  
    //     })
    BottomNavBar.aggregate( [
        {
            $lookup:
            {
                from: "products",
                localField: "dropDownMenu",
                foreignField: "_id",
                as: "productsSubMenu"
            }
        },
        {
            $lookup:
            {
                from: "services",
                localField: "dropDownMenu",
                foreignField: "_id",
                as: "servicesSubMenu"
            }
        }
    ] ).exec((err, bottomNavBar) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
    
                if (!bottomNavBar) {
                    return res.status(404).send({ message: "User Not found." });
                }
                res.status(200).send(bottomNavBar);  
            })

};
