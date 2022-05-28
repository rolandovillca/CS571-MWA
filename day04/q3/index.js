require("dotenv").config();
const express = require("express");
const routeGames = require("./api/routes");
const path = require("path");
const app = express();

const PORT = process.env.PORT;
const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER;

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, PUBLIC_FOLDER)));

app.use(routeGames);

const server = app.listen(PORT, (err) => {
    console.log(`Listening on port: ${PORT}`);
});