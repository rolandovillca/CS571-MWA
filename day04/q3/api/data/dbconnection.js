require("dotenv").config();
// const MongoClient = require("mongodb").MongoClient;
const {MongoClient} = require("mongodb");

let _connection = null;
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

const open = () => {
    if (get() == null) {
        MongoClient.connect(DB_URL, (err, client) => {
            if (err) {
                console.log("DB connection error");
                return;
            }
            _connection = client.db(DB_NAME);
            console.log("DB connection successfully");
        });
    }
}

const get = function() {
    return _connection;
}

module.exports = {
    open,
    get
}