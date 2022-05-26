const json = require("../data/games.json");
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    console.log("middleware: " + Date.now());
    next();
});

router.get("/json", function(req, res) {
    console.log("111");
    res.status(200);
    res.json(json);
}).post(function(req, res){
    console.log("222");
    res.status(200).json({"data": "POST"});
});

module.exports =  router;