require("../data/dbconnection").open();
const express = require("express");
const dbconnection = require("../data/dbconnection");

const ObjectId = require("mongodb").ObjectId;

const getOne = (req, res) => {
    const gameId = req.params.gameId; // String, do not use parseInt
    const db = dbconnection.get();
    const gamesCollection = db.collection("games");
    gamesCollection.findOne({_id: ObjectId(gameId)}, (err, game) => {
        if (err) {
            console.log("Error: " + err);
            return;
        }
        console.log("Found game: " + game);
        res.status(200).json(game);
    });
}

const getAll = (req, res) => {
    const db = dbconnection.get();
    const gamesCollection = db.collection("games");
    gamesCollection.find().toArray((err, games) => {
        if (err) {
            console.log("Error: " + err);
            return;
        }
        console.log("Found games");
        res.status(200).json(games);
    });
}

/*
curl -i -X POST -H "Accept: application/json" -H "Content-Type: application/json" --data "{\"title\":\"xyz\", \"price\":\"3.8\"}" http://localhost:3000/games/add
*/
const addOne = (req, res) => {
    let newGame = {};
    if (req.body && req.body.title && req.body.price) {
        newGame.title = req.body.title;
        newGame.price = parseFloat(req.body.price);
        const db = dbconnection.get();
        const gamesCollection = db.collection("games");
        gamesCollection.insertOne(newGame, (err, response) => {
            if (err) {
                console.log("Error: " + err)
                res.status(500).json({error: err})
                return;
            } else {
                console.log("Insertion successfully: " + response);
                res.status(200).json(response);
            }
        });
    }
}

const deleteOne = (req, res) => {
    console.log("Deleting gameId: " + req.params.gameId);
    if (req.params.gameId) {
        const gameId = req.params.gameId;
        const db = dbconnection.get();
        const gamesCollection = db.collection("games");
        gamesCollection.deleteOne({_id: ObjectId(gameId)}, (err, response) => {
            if (err) {
                console.log("Error deleting gameId: " + gameId);
                res.status(200).json(err);
            } else {
                console.log("Deleted successfully gameID: " + gameId);
                res.status(200).json(response);
            }
        })
    }
}

module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne
}