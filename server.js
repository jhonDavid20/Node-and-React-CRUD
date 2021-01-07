const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./app/models");
db.sequileze.sync();

/* In development to drop tables and re-sync db
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
*/

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


// parse request of content-type - application/json
app.use(bodyParser.json());

// parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

// simple route
app.get("/", (req,res) => {
    res.json({ message: "Welcome to CRUD application"});
});

//set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


