const mongoose = require("mongoose");
const Team = mongoose.model(process.env.TEAM_MODEL);

const getAll = (req, res) => {
    let offset = parseInt(process.env.DEFAULT_FIND_OFFSET);
    let count = parseInt(process.env.DEFAULT_FIND_COUNT);
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    // Team.find().exec((error, teams) => {
    //     console.log("ALL TEAMS...");
    //     res.json(teams);
    // });
    Team.find().skip(offset).limit(count).exec((err, teams) => {
        console.log("Found teams");
        res.status(200).json(teams);
    });
}

const getOne = (req, res) => {
    const teamId = req.params.teamId;
    Team.findById(teamId).exec((err, team) => {
        const response = { status: 200, message: team }
        if (err) {
            console.log("Error finding team: " + err);
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    });
}

const addOne = (req, res) => {
    console.log("Adding team");
    const newTeam = {
        name: req.body.name,
        country: req.body.country,
        creation_year: parseInt(req.body.creation_year),
        creation_month: parseInt(req.body.creation_month),
        creation_day: parseInt(req.body.creation_day),
        members: {}
    };
    Team.create(newTeam, (err, team) => {
        const response = { status: 200, message: team};
        if (err) {
            console.log("Error saving team: " + err);
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    });
}

const deleteOne = function (req, res) {
    const teamId = req.params.teamId;
    Team.findByIdAndDelete(teamId).exec((err, deletedTeam) => {
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

const _updateOne = (req, res, updateTeamCallback) => {
    console.log("Update One Team Controller");
    const teamId = req.params.teamId;
    Team.findById(teamId).exec((err, team) => {
        const response = { status:200, message:team };
        if (err) {
            console.log("Error finding team");
            response.status = 500;
            response.message = err;
        }
        updateTeamCallback(req, res, team, response);
        // if (response.status !== 204) {
        //     res.status(response.status).json(response.message);
        // } else {
        //     updateTeamCallback(req, res, team, response);
        // }
    });
}

const partialUpdateOne = (req, res) => {
    console.log("Partial Update One Team Controller");
    teamUpdate = (req, res, team, response) => {
        if (req.body.name) { team.name = req.body.name; }
        if (req.body.country) { team.country = req.body.country; }
        if (req.body.creation_year) { team.creation_year = req.body.creation_year; }
        if (req.body.creation_month) {team.creation_month = req.body.creation_month;}
        if (req.body.creation_day) { team.creation_day = req.body.creation_day; }
        if (req.body.members) { team.members = req.body.members; }
        team.save((err, updatedTeam) => {
            if (err) {
                response.status = 500;
                response.message = err;
            }
            res.status(response.status).json(response.message);
        });
    }
    _updateOne(req, res, teamUpdate);
}

const fullUpdateOne = (req, res) => {
    console.log("Full Update One Team Controller");
    teamUpdate = (req, res, team, response) => {
        team.name = req.body.name;
        team.country = req.body.country;
        team.creation_year = parseInt(req.body.creation_year);
        team.creation_month = parseInt(req.body.creation_month);
        team.creation_day = parseInt(req.body.creation_day);
        team.members = {};
        team.save((err, updatedTeam) => {
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
    partialUpdateOne,
    fullUpdateOne
}