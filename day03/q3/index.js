require("dotenv").config();
const express = require("express");
const path = require("path");
const routesOp = require("./routes");
const app = express();

const PORT = process.env.PORT || 3000;
const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER;

app.use(express.static(path.join(__dirname, PUBLIC_FOLDER)));

app.use("/op", routesOp);

const server = app.listen(PORT, (err) => {
    console.log(`Listening on port: ${PORT}`);
});
