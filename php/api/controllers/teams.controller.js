const mongoose = require("mongoose");
const Team = mongoose.model("Team");

const getAll = (req, res) => {
    console.log(".............");
    Team.find().exec((error, teams) => {
        console.log("ALL TEAMS...");
        res.json(teams);
    });
}

const getOne = (req, res) => {
    const teamId = req.params.teamId;
    Team.findById(teamId).exec(function (err, team) {
        res.status(200).json(team);
    });
}

const addOne = (req, res) => {

}

const deleteOne = function (req, res) {
    const gameId = req.params.gameId;
    Game.findByIdAndDelete(gameId).exec(function (err, deletedGame) {
        const response = { status: 204, message: deletedGame };
        if (err) {
            console.log("Error finding game");
            response.status = 500;
            response.message = err;
        } else if (!deletedGame) {
            console.log("Game id not found");
            response.status = 404;
            response.message = {
                "message": "Game ID not found"
            };
        }
        res.status(response.status).json(response.message);
    });
}

const fullUpdateOne = function (req, res) {
    console.log("Full Update One Game Controller");
    gameUpdate = function (req, res, game, response) {
        game.title = req.body.title; game.year = req.body.year; game.rate = req.body.rate;
        game.price = req.body.price; game.minPlayers = req.body.minPlayers;
        game.maxPlayers = req.body.maxPlayers; game.minAge = req.body.minAge;
        game.designers = req.body.designers;
        if (req.body.name) {
            console.log("Name passed");
            game.publisher = { name: req.body.name };
        } else {
            console.log("No Name passed");
            game.publisher = { name: "NoName" };
        }
        game.reviews = [];
        game.save(function (err, updatedGame) {
            if (err) {
                response.status = 500;
                response.message = err;
            }
            res.status(response.status).json(response.message);
        });
    }
    _updateOne(req, res, gameUpdate);
}

module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne,
    updateOne
}