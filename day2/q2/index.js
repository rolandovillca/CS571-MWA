require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    console.log(req.url);
    res.end();
});

app.post("/", function(req, res) {
    res.status(200).json({"key1": "value1", "key2": "value2"});
    res.end();
});

const server = app.listen(PORT, function(err){
    const port = server.address().port;
    console.log("Running server on port: " + port)
});
