const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/games.controller")

router.use((req, res, next) => {
    console.log("Game route middleware: " + req.method + " " + req.url);
    next();
});

router.route("/game/:gameId").get(gamesController.getOne);

router.route("/game/create").post(gamesController.saveOne);

router.route("/game/delete").delete(gamesController.deleteOne);

module.exports = router;