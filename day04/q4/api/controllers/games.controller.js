require("../data/dbconnection").open();
const express = require("express");
const dbconnection = require("../data/dbconnection");

const ObjectId = require("mongodb").ObjectId;

const getOne = (req, res) => {
    const gameId = parseInt(req.params.gameId);
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