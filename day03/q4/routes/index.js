const jsonData = require("../data/school.json");
const router = require("express").Router();

router.use((req, res, next) => {
    console.log("Middleware - School");
    next();
});

router.get("/json", function(req, res){
    // http://localhost:3000/school/json
    res.status(200);
    res.json(jsonData);
});

module.exports = router;