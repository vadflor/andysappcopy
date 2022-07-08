const express = require("express");
const cors = require("cors");
const path = require('path');


const usersRouter = require('./app/routes/users');

const { 
    createUserTable,
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
    createFooterCompanyList
} = require('./createBaseCollections');

var corsOptions = {
    origin: "https://andysappcopy.herokuapp.com"
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");


db.mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial(); // init new user.
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

// simple route
// app.get("/", (req, res) => {
//     res.send("Welcome to Andis App application." );
// });

// route to login-register

app.use('/users', usersRouter);

// routes
require("./app/routes/auth.routes")(app);
// require("./app/routes/user.routes")(app);
require("./app/routes/bottomNavBar.routes")(app);
require("./app/routes/productPizza.routes")(app);
require("./app/routes/productBreakfast.routes")(app);
require("./app/routes/productSnaks.routes")(app);
require("./app/routes/footer.routes")(app);
require("./app/routes/location.routes")(app);
require("./app/routes/brandListLogo.routes")(app);
require("./app/routes/topMenuLinks.routes")(app);
require("./app/routes/topSlider.routes")(app);
require("./app/routes/bottomSlider.routes")(app);
require("./app/routes/products.routes")(app);




app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});


// set port, listen for requests
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port 8080.`);
});

function initial() {
    createUserTable()
    createLocationsTable()
    createBrandListLogo()
    createTopMenuLinks()
    createBottomNavBar()
    createProducts()
    createServices()
    createTopSlider()
    createProductPizza()
    createDescriptionPizza()
    createProductBreakfast()
    createDescriptionBreakfast()
    createProductSnaks()
    createDescriptionSnaks()
    createBottomSlider()
    createFooter()
    createDeliveryCityList()
    createFooterCompanyList()
};

