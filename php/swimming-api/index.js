require("dotenv").config();
require("./api/data/db");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./api/routes");

const app = express();

const PORT = process.env.PORT;
const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.ANGULAR_URL);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, DELETE, PUT");
    next();
});

app.use(express.static(path.join(__dirname, PUBLIC_FOLDER)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api", routes);

const server = app.listen(PORT, (err) => {
    if (err) {
        console.log("Error: " + err);
        return;
    } else {
        console.log(`Listening on port ${server.address().port}`);
    }
});
