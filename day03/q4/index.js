require("dotenv");
const express = require("express");
const path = require("path");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3000;
const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER || "public";

app.use(express.static(path.join(__dirname, PUBLIC_FOLDER)));

app.use("/school", routes);

const server = app.listen(PORT, (err) => {
    console.log(`Listening on port: ${PORT}`);
})