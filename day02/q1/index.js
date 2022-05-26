const http = require("http");
const path = require("path");
const fs = require("fs");

const serveAllRequests = function(req, res) {
    if (req.url == "/page1.html") {
        fs.readFile(path.join(__dirname, "public", "page1.html"), function(err, buffer){
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(buffer);
        });
    } else if(req.url == "/page2.html") {
        fs.readFile(path.join(__dirname, "public", "page2.html"), function(err, buffer){
            // res.setHeader("Content-Type", "text/html");
            res.writeHead(200, {"Content-Type": "text/html", "Content-Length": buffer.length});
            res.write(buffer);
            res.end();
        });
    } else if(req.url == "/") {
        fs.readFile(path.join(__dirname, "public", "index.html"), function(err, buffer){
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(buffer);
        });
    }
}

const server = http.createServer(serveAllRequests);

const PORT = 4343;

server.listen(PORT, "localhost", function(){
    console.log(`Server is running on port: ${PORT}`);
});
