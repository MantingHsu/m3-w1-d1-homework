const http = require('http');

const server = http.createServer((req, res) => {
    console.log("A new request received: " + req.url);

    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/") {
        res.end("Welcome to the Home Page!");
    } else if (req.url === "/about") {
        res.end("Welcome to the About Page!");
    } else if (req.url === "/contact") {
        res.end("Welcome to the Contact Page!");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Invalid Request!");
    }
});

server.listen(5000, () => {
    console.log("The NodeJS server on port 5000 is now running…");
});
