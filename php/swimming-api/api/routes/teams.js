const express = require("express");
const router = express.Router();
const teamsController = require("../controllers/teams-controller");

// Middleware executed before each route
router.use((req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
});

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.route("/teams/all").get(teamsController.getAll);

router.route("/teams/:teamId")
    .get(teamsController.getOne)
    .put(teamsController.fullUpdateOne)
    .delete(teamsController.deleteOne);

router.route("/teams/add").post(teamsController.addOne);

module.exports = router;