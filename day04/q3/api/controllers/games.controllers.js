require("../data/dbconnection").open(); // Open database connection
const dbconnection = require("../data/dbconnection");

const getAll = (req, res) => {
    const gamesCollection = dbconnection.get().collection("games");
    // res.send(gamesCollection.find()); // Sync Not Good
    gamesCollection.find().toArray(function(err, docs){
        if (err) {
            console.log(err);
            return
        }
        res.status(200).json(docs);
    });
};

const getGames = (req, res) => {
    let offset = 0;
    let count = 3;
    if (req.query.offset) offset = parseInt(req.query.offset);
    if (req.query.count) count = parseInt(req.query.count);
    if (count > 10) {
        count = 10;
        console.log("Number of games should not be higher than 10");
    }
    const gamesCollection = dbconnection.get().collection("games");
    // res.send(gamesCollection.find()); // Sync Not Good
    console.log(offset);
    console.log(count);
    gamesCollection.find().skip(offset).limit(count).toArray(function(err, docs){
        if (err) {
            console.log(err);
            return
        }
        res.status(200).json(docs);
    });
};

module.exports = {
    getAll,
    getGames
}