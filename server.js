const http = require("http");
const fs = require("fs");

const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (error, data) => {
            if (error) reject("something went wrong");
            else resolve(data);
        });
    });
};

const server = http.createServer(async (request, response) => {
    switch (request.url) {
        case "/favicon.ico": {
            response.setHeader("Content-Type", "image/x-icon");
            fs.readFile("./favicon.ico", (error, data) => {
                if (error) {
                    response.statusCode = 500;
                    response.end();
                } else {
                    response.end(data);
                }
            });
            break;
        }

        case "/": {
            const data = await readFile("pages/index.html");
            response.end(data);
            break;
        }

        case "/about": {
            const data = await readFile("pages/about.html");
            response.end(data);
            break;
        }

        default: {
            response.end("404 Not Found");
        }
    }
});

server.listen(3003);
