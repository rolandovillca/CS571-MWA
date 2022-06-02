require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser"); // NEW ***
const routerGames = require("./api/routes");
const { ppid } = require("process");
const app = express();

const PORT = process.env.PORT;
const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER;

app.use(express.static(path.join(__dirname, PUBLIC_FOLDER)));
// app.use(express.json());
// app.use(express.urlencoded());
app.use(bodyParser.json()); // NEW ***
app.use(bodyParser.urlencoded({extended: false})); // NEW ***
app.use("/api", routerGames);

const server = app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Listening on port: ${server.address().port}`);
});