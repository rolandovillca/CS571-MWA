const express = require("express");
const router = express.Router();
const membersController = require("../controllers/members-controller");

// Middleware executed before each route
router.use((req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
});

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.ANGULAR_URL);
    res.header("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.route("/teams/all").get(membersController.getAll);

router.route("/teams/:teamId")
    .get(membersController.getOne)
    .put(membersController.fullUpdateOne)
    .delete(membersController.deleteOne);

router.route("/teams/add").post(membersController.addOne);

module.exports = router;