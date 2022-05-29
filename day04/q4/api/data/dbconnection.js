require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

let _connection = null;

const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

const open = (req, res) => {
    MongoClient.connect(DB_URL, (err, client) => {
        if (err) {
            console.log("DB connection failed: " + err);
            return;
        }
        _connection = client(DB_NAME);
        console.log("DB connection successfully");
    });
}

const get = () => {
    return _connection;
}