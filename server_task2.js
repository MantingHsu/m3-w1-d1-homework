const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log("A new request received: " + req.url);

    let filePath = "";
    if (req.url === "/") {
        filePath = "home.html";
    } else if (req.url === "/about") {
        filePath = "about.html";
    } else if (req.url === "/contact") {
        filePath = "contact.html";
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Invalid Request!");
        return;
    }

    fs.readFile(path.join(__dirname, filePath), (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error!");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});

server.listen(5000, () => {
    console.log("The NodeJS server on port 5000 is now running…");
});
