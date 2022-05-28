const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/games.controllers");

router.use((req, res, next) => {
    console.log("Middleware - " + req.method + " " + req.url);
    next();
});

router.route("/games/all")
    .get(gamesController.getAll);

router.route("/games")
    .get(gamesController.getGames);

module.exports = router;