require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

let _connection = null;

const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

const open = () => {
    if (get() == null) {
        MongoClient.connect(DB_URL, (err, client) => {
            if (err) {
                console.log("DB connection failed: " + err);
                return;
            }
            _connection = client.db(DB_NAME);
            console.log("DB connection successfully");
        });
    }
}

const get = () => {
    return _connection;
}

module.exports = {
    open,
    get
}