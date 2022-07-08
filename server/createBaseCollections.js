const {user, role, location, brandListLogo, bottomNavBar, topMenuLinks, products, services, topSlider, productPizza, descriptionPizza, productBreakfast, descriptionBreakfast, productSnaks, descriptionSnaks, bottomSlider, footer, deliveryCityList, footerCompanyList } = require("./constants");





const db = require("./app/models");

const User = db.user;
const Role = db.role;
const Location = db.location;
const BrandListLogo = db.brandListLogo;
const TopMenuLinks = db.topMenuLinks;
const BottomNavBar = db.bottomNavBar;
const Products = db.products;
const Services = db.services;
const TopSlider = db.topSlider;
const ProductPizza = db.productPizza;
const DescriptionPizza = db.descriptionPizza;
const ProductBreakfast = db.productBreakfast;
const DescriptionBreakfast = db.descriptionBreakfast;
const ProductSnaks = db.productSnaks;
const DescriptionSnaks = db.descriptionSnaks;
const BottomSlider = db.bottomSlider;
const Footer = db.footer;
const DeliveryCityList = db.deliveryCityList;
const FooterCompanyList = db.footerCompanyList;

const createUserTable = async () => {

    User.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await User.create(user)
        }
    })
}

const createRolesTable = async () => {

    Role.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await Role.create(role)
        }
    })
}

const createLocationsTable = async () => {

    Location.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await Location.create(location)
        }
    })
}

const createBrandListLogo = async () => {

    BrandListLogo.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await BrandListLogo.create(brandListLogo)
        }
    })
}

const createTopMenuLinks = async () => {

    TopMenuLinks.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await TopMenuLinks.create(topMenuLinks)
        }
    })
}

const createBottomNavBar = async () => {
    BottomNavBar.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await BottomNavBar.create(bottomNavBar)

            await BottomNavBar.find({}, async (err, navItems) => {
                navItems.forEach(async nav => {
                    
                    await BottomNavBar.findByIdAndUpdate(nav._id, 
                        {$push: {dropDownMenu: (await Products.find({type: nav.link}))}},
                        { new: true, useFindAndModify: false }
                        )
                })
            })

            await BottomNavBar.find({}, async (err, navItems) => {
                navItems.forEach(async nav => {
                    await BottomNavBar.findByIdAndUpdate(nav._id, 
                        {$push: {dropDownMenu: (await Services.find({type: nav.link}))}},
                        { new: true, useFindAndModify: false }
                        )
                })
            })
        }
        
    })
}

const createProducts = async () => {
    
    Products.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await Products.create(products)

            await Products.find({}, async (err, navItems) => {
                navItems.forEach(async nav => {
                    
                    await Products.findByIdAndUpdate(nav._id, 
                        {$push: {items: (await ProductPizza.find({type: nav.link}))}},
                        { new: true, useFindAndModify: false }
                        )
                })
            })

            await Products.find({}, async (err, navItems) => {
                navItems.forEach(async nav => {
                    
                    await Products.findByIdAndUpdate(nav._id, 
                        {$push: {items: (await ProductBreakfast.find({type: nav.link}))}},
                        { new: true, useFindAndModify: false }
                        )
                })
            })

            await Products.find({}, async (err, navItems) => {
                navItems.forEach(async nav => {
                    
                    await Products.findByIdAndUpdate(nav._id, 
                        {$push: {items: (await ProductSnaks.find({type: nav.link}))}},
                        { new: true, useFindAndModify: false }
                        )
                })
            })
        }
    })
}



const createServices = async () => {

    Services.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await Services.create(services)

           

            await Footer.find({}, async (err, navItems) => {
                navItems.forEach(async elem => {
                    await Footer.findByIdAndUpdate(elem._id, 
                        {$push: {footerServicesList: (await Services.find({type: elem.footerNavTitle}))}},
                        { new: true, useFindAndModify: false }
                        )
                })
            })
        }
    })
}

const createTopSlider = async () => {

    TopSlider.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await TopSlider.create(topSlider)
        }
    })
}

const createProductPizza = async () => {

    ProductPizza.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await ProductPizza.create(productPizza)
        }
    })
}
const createDescriptionPizza = async () => {

    DescriptionPizza.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await DescriptionPizza.create(descriptionPizza)

            await ProductPizza.find({}, async (err, navItems) => {
                navItems.forEach(async elem => {
                    await ProductPizza.findByIdAndUpdate(elem._id, 
                        {$push: {description: (await DescriptionPizza.find({type: elem.productName}))}},
                        { new: true, useFindAndModify: false }
                        )
                })
            })
        }
    })
}

const createProductBreakfast = async () => {

    ProductBreakfast.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await ProductBreakfast.create(productBreakfast)
        }
    })
}
const createDescriptionBreakfast = async () => {

    DescriptionBreakfast.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await DescriptionBreakfast.create(descriptionBreakfast)

            await ProductBreakfast.find({}, async (err, navItems) => {
                navItems.forEach(async elem => {
                    await ProductBreakfast.findByIdAndUpdate(elem._id, 
                        {$push: {description: (await DescriptionBreakfast.find({type: elem.productName}))}},
                        { new: true, useFindAndModify: false }
                        )
                })
            })
        }
    })
}

const createProductSnaks = async () => {

    ProductSnaks.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await ProductSnaks.create(productSnaks)
        }
    })
}
const createDescriptionSnaks = async () => {

    DescriptionSnaks.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await DescriptionSnaks.create(descriptionSnaks)

            await ProductSnaks.find({}, async (err, navItems) => {
                navItems.forEach(async elem => {
                    await ProductSnaks.findByIdAndUpdate(elem._id, 
                        {$push: {description: (await DescriptionSnaks.find({type: elem.productName}))}},
                        { new: true, useFindAndModify: false }
                        )
                })
            })
        }
    });
}

const createBottomSlider = async () => {

    BottomSlider.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await BottomSlider.create(bottomSlider)
        }
    })
}

const createFooter = async () => {

    Footer.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await Footer.create(footer)
        }
    });
}

const createDeliveryCityList = async () => {

    DeliveryCityList.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await DeliveryCityList.create(deliveryCityList)

            await Footer.find({}, async (err, navItems) => {
                navItems.forEach(async elem => {
                    await Footer.findByIdAndUpdate(elem._id, 
                        {$push: {footerDeliveryCityList: (await DeliveryCityList.find({type: elem.footerNavTitle}))}},
                        { new: true, useFindAndModify: false }
                        )
                })
            })
        }
    });
}

const createFooterCompanyList = async () => {

    FooterCompanyList.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await FooterCompanyList.create(footerCompanyList)

            await Footer.find({}, async (err, navItems) => {
                navItems.forEach(async elem => {
                    await Footer.findByIdAndUpdate(elem._id, 
                        {$push: {footerCompanyList: (await FooterCompanyList.find({type: elem.footerNavTitle}))}},
                        { new: true, useFindAndModify: false }
                        )
                })
            })
        }
    })
}

module.exports = {
    createUserTable,
    createRolesTable,
    createLocationsTable,
    createBrandListLogo,
    createTopMenuLinks,
    createBottomNavBar,
    createProducts,
    createServices,
    createTopSlider,
    createProductPizza,
    createDescriptionPizza,
    createProductBreakfast,
    createDescriptionBreakfast,
    createProductSnaks,
    createDescriptionSnaks,
    createBottomSlider,
    createFooter,
    createDeliveryCityList,
    createFooterCompanyList,

};
