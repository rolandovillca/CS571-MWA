const jsonData = require("../data/games.json");
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    console.log("middleware inside games router: " + Date.now());
    next();
});

// router.get("/json", (req, res) => {
//     console.log("000");
//     res.status(200);
//     res.json(jsonData)
// });

router.route("/json").get(function(req, res) {
    console.log("111");
    res.status(200);
    res.json(jsonData);
}).post(function(req, res){
    console.log("222");
    res.status(200).json({"data": "POST"});
});

module.exports =  router;