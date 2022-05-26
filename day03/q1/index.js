require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    console.log("Not entered here");
    res.status(200)
    res.end();
});

app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
});