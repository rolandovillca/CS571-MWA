require("dotenv").config();
require("./api/data/db");

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const routesJobSearching = require("./api/routes");
const app = express();

const PORT = process.env.PORT;
const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER;

app.use(express.static(path.join(__dirname, PUBLIC_FOLDER)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api", routesJobSearching);

const server = app.listen(PORT, (err) => {
    if (err) {
        console.log("Error: " + err);
        return;
    } else {
        console.log(`Listening on port ${server.address().port}`);
    }
});