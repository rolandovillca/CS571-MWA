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
    const teamId = req.params.teamId;
    Game.findByIdAndDelete(teamId).exec(function (err, deletedTeam) {
        const response = { status: 204, message: deletedTeam };
        if (err) {
            console.log("Error finding team");
            response.status = 500;
            response.message = err;
        } else if (!deletedTeam) {
            console.log("Team id not found");
            response.status = 404;
            response.message = {
                "message": "Team ID not found"
            };
        }
        res.status(response.status).json(response.message);
    });
}

const fullUpdateOne = function (req, res) {
    console.log("Full Update One Team Controller");
    teamUpdate = function (req, res, team, response) {
        team.title = req.body.title; 
        team.year = req.body.year; 
        team.rate = req.body.rate;
        team.price = req.body.price; 
        team.minPlayers = req.body.minPlayers;
        team.maxPlayers = req.body.maxPlayers; 
        team.minAge = req.body.minAge;
        team.designers = req.body.designers;
        if (req.body.name) {
            console.log("Name passed");
            team.publisher = { name: req.body.name };
        } else {
            console.log("No Name passed");
            team.publisher = { name: "NoName" };
        }
        team.reviews = [];
        team.save(function (err, updatedTeam) {
            if (err) {
                response.status = 500;
                response.message = err;
            }
            res.status(response.status).json(response.message);
        });
    }
    _updateOne(req, res, teamUpdate);
}

module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne,
    fullUpdateOne
}