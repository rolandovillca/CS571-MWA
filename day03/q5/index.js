require("dotenv").config();
const express = require("express");
const routeStudent = require("./routes/students");
const app = express();

const PORT = process.env.PORT || 3000;
const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER || "public";

app.use("/api", routeStudent);

const server = app.listen(PORT, (err) => {
    console.log(`Listening on port ${PORT}`);
});