const mongoose = require("mongoose");
const Team = mongoose.model(process.env.TEAM_MODEL);

const SUCCESS_STATUS_CODE = process.env.SUCCESS_STATUS_CODE;
const CREATED_STATUS_CODE = process.env.CREATED_STATUS_CODE;
const SERVER_ERROR_STATUS_CODE = process.env.SERVER_ERROR_STATUS_CODE;
const NOT_FOUND_STATUS_CODE = process.env.NOT_FOUND_STATUS_CODE;
const NOT_FOUND_MSG = process.env.NOT_FOUND_MSG;

const getAll = (req, res) => {
    let offset = parseInt(process.env.DEFAULT_FIND_OFFSET);
    let count = parseInt(process.env.DEFAULT_FIND_COUNT);
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    Team.find().skip(offset).limit(count).exec()
        .then((teams) => { res.status(SUCCESS_STATUS_CODE).json(teams) })
        .catch((err) => { res.status(SUCCESS_STATUS_CODE).json(err) });
}

const getOne = (req, res) => {
    const teamId = req.params.teamId;
    Team.findById(teamId).exec()
        .then((team) => {
            if (team) {
                res.status(SUCCESS_STATUS_CODE).json(team);
            } else {
                res.status(NOT_FOUND_STATUS_CODE).json(NOT_FOUND_MSG);
            }
        })
        .catch((err) => {
            res.status(SERVER_ERROR_STATUS_CODE).json(err);
        });
}

const addOne = (req, res) => {
    console.log("Adding team");
    const newMembers = [];
    if (req.body.members) {
        for (const member of req.body.members) {
            newMembers.push({
                name: member.name,
                age: parseInt(member.age),
                number_olympic_participation: parseInt(member.number_olympic_participation)
            });
        }
    }
    console.log(".....................", req.body.name);
    console.log(".....................", req.body.country);
    console.log(".....................", req.body.creation_year);
    console.log(".....................", req.body.creation_month);
    console.log(".....................", newMembers);
    const newTeam = {};
    newTeam.name = req.body.name;
    newTeam.country = req.body.country;
    newTeam.members = newMembers;
    if (req.body.creation_year) {
        newTeam.creation_year = parseInt(req.body.creation_year);
    }
    if (req.body.creation_month) {
        newTeam.creation_month = parseInt(req.body.creation_month);
    }
    if (req.body.creation_day) {
        newTeam.creation_day = parseInt(req.body.creation_day);
    }
    Team.create(newTeam)
        .then((team) => {
            res.status(CREATED_STATUS_CODE).json(team);
        })
        .catch((err) => {
            res.status(SERVER_ERROR_STATUS_CODE).json(err);
        });
}

const deleteOne = (req, res) => {
    const teamId = req.params.teamId;
    Team.findByIdAndDelete(teamId).exec()
        .then((deletedTeam) => {
            if (deletedTeam) {
                res.status(NO_CONTENT_STATUS_CODE).json(deletedTeam);
            } else {
                res.status(NOT_FOUND_STATUS_CODE).json(NOT_FOUND_MSG)
            }
        })
        .catch((err) => {
            res.status(SERVER_ERROR_STATUS_CODE).json(err);
        });
}

const _updateOne = (req, res, updateTeamCallback) => {
    console.log("Update One Team Controller");
    const teamId = req.params.teamId;
    Team.findById(teamId).exec()
        .then((team) => {
            if (team) {
                updateTeamCallback(req, res, team, response);
            } else {
                res.status(NOT_FOUND_STATUS_CODE).json(NOT_FOUND_MSG);
            }
        })
        .catch((err) => {
            res.status(SERVER_ERROR_STATUS_CODE).json(err);
        });
}

const partialUpdateOne = (req, res) => {
    console.log("Partial Update One Team Controller");
    teamUpdate = (req, res, team, response) => {
        if (req.body.name) {
            team.name = req.body.name;
        }
        if (req.body.country) {
            team.country = req.body.country;
        }
        if (req.body.creation_year) {
            team.creation_year = parseInt(req.body.creation_year);
        }
        if (req.body.creation_month) {
            team.creation_month = parseInt(req.body.creation_month);
        }
        if (req.body.creation_day) {
            team.creation_day = parseInt(req.body.creation_day);
        }
        // if (req.body.members.name) {
        //     team.members.name = req.body.members.name;
        // }
        // if (req.body.members.age) {
        //     team.members.age = parseInt(req.body.members.age);
        // }
        // if (req.body.members.number_olympic_participation) {
        //     team.members.number_olympic_participation =
        //         parseInt(req.body.members.number_olympic_participation);
        // }
        team.save((err, updatedTeam) => {
            if (err) {
                response.status = SERVER_ERROR_STATUS_CODE;
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
        // team.members.name = req.body.members.name;
        // team.members.age = parseInt(req.body.members.age);
        // team.members.number_olympic_participation =
        //     parseInt(req.body.members.number_olympic_participation);
        team.save()
            .then((updatedTeam) => {
                res.status(SUCCESS_STATUS_CODE).json(updatedTeam);
            })
            .catch((err) => {
                res.status(SERVER_ERROR_STATUS_CODE).json(err);
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