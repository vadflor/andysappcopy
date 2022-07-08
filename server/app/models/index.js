const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.location = require("./locations.model");
db.brandListLogo = require("./brandListLogo.model");
db.topMenuLinks = require("./topMenuLinks.model");
db.bottomNavBar = require("./bottomNavBar.model");
db.products = require("./products.model");
db.services = require("./services.model");
db.topSlider = require("./topSlider.model");
db.productPizza = require("./productPizza.model");
db.descriptionPizza = require("./descriptionPizza.model");
db.productBreakfast = require("./productBreakfast.model");
db.descriptionBreakfast = require("./descriptionBreakfast.model");
db.productSnaks = require("./productSnaks.model");
db.descriptionSnaks = require("./descriptionSnaks.model");
db.bottomSlider = require("./bottomSlider.model");
db.footer = require("./footer.model");
db.deliveryCityList = require("./deliveryCityList.model");
db.footerCompanyList = require("./footerCompanyList.model");
// db.ROLES = ["user", "admin", "moderator"];

module.exports = db;