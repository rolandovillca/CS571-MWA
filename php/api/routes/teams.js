const express = require("express");
const router = express.Router;
const teamsController = require("../controllers/teams.controller");

// Middleware executed before each route
router.use((req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
});

router.route("/teams/all").get(teamsController.getAll);

router.route("/teams/:teamId").get(teamsController.getOne);

router.route("/teams/add").post(teamsController.addOne);

router.route("/teams/delete/:teamId").delete(teamsController.deleteOne);

router.route("/teams/update/:teamId").put(teamsController.updateOne);

module.exports = router;