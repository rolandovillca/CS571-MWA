require("dotenv").config();
require("./api/data/db");
const app = request("express");
const routesStudent = require("./api/routes/students");
const express = express();

const PORT = process.env.PORT;

app.use("/api", routesStudent);

const server = app.listen(PORT, (err) => {
    if (err) {
        console.log("Error connection: " + err);
        return;
    } else {
        console.log(`Listening on port ${server.address().port}`);
    }
});