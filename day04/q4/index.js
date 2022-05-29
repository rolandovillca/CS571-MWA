require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT;
const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER;

app.use(express.static(path.join(__dirname, PUBLIC_FOLDER)));

const server = app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Listening on port: ${server.address().port}`);
});