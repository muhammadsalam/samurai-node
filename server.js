const http = require("http");
const fs = require("fs");

let reqApiCount = 0;

const server = http.createServer((request, response) => {
    switch (request.url) {
        case "/favicon.ico":
            console.log(request.url);
            response.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(response);

            break;
        case "/":
        case "/students":
            response.end("List of students");
            break;
        case "/api":
            response.end("Muslim Pro API #" + ++reqApiCount);
            break;
        default:
            response.end("404 Not Found");
    }
});

server.listen(3003);
