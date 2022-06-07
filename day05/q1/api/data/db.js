const mongoose = require("mongoose");
require("./students-model");

const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(DB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to: " + DB_NAME);
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});

mongoose.connection.on("error", (error) => {
    console.log("Mongoose connection error: " + error);
});

process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log(process.env.SIGINT_MESSAGE);
        process.exit(0);
    });
});

process.on("SIGTERM", () => {
    mongoose.connection.close(() => {
        console.log(process.env.SIGTERM_MESSAGE);
    });
});

process.once("SIGUSR2", () => {
    mongoose.connection.close(() => {
        console.log(process.env.SIGUSR2);
    });
});