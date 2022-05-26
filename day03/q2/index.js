require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes/games");
const app = express();

const PORT = process.env.PORT || 3000;
const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER || "public";

app.use(express.static(path.join(__dirname, PUBLIC_FOLDER)));

app.use("/games", routes);

app.use(function(req, res, next){
    console.log(`${req.method} ${req.url}`);
    next();
});



const server = app.listen(PORT, function(err){
    const urlPort = server.address().port;
    console.log(`Listening on port: ${urlPort}`);
})