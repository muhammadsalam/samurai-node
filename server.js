const http = require("http");
const fs = require("fs");

let reqApiCount = 0;

const server = http.createServer((request, response) => {
    switch (request.url) {
        case "/favicon.ico":
            console.log(request.url);
            response.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("/favicon.ico").pipe(response);
            break;
        case "/":
        case "/students":
            response.write("List of students");
            break;
        case "/api":
            response.write("Muslim Pro API #" + ++reqApiCount);
            break;
        default:
            response.write("404 Not Found");
    }

    response.end();
});

server.listen(3003);
