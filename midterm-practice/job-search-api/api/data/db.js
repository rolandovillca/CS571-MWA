const mongoose = require("mongoose");
require("./jobs-model");

const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
    console.log("Mogoose connected to: " + DB_NAME);
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});

mongoose.connection.on("error", (error) => {
    console.log("Mongoose connection error:" + error);
});