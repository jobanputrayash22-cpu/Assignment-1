const http = require("http");

const server = http.createServer(async (req, res) => {

    if (req.url === "/google" && req.method === "GET") {

        try {
            const response = await fetch("https://www.google.com");

            const data = await response.text();

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);

        } catch (error) {

            res.writeHead(500, {
                "Content-Type": "text/plain"
            });

            res.end("Error fetching Google page");

        }

    } else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Route not found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});