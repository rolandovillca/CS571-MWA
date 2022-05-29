const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/games.controller")

router.use((req, res, next) => {
    console.log("Middleware: " + req.method + " " + req.url);
    next();
});

router.route("/games/all").get(gamesController.getAll)

router.route("/games/:gameId").get(gamesController.getOne);

router.route("/games/add").post(gamesController.addOne);

router.route("/games/delete/:gameId").delete(gamesController.deleteOne);

module.exports = router;