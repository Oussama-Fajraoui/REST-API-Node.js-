const http = require('http');
// require("dotenv").config();
const GetReq = require('./routes/GetRequet');

let movies = require('./api/movies.json');


const PORT = process.env.PORT || 5001;

// Creating HTTP server :

const server = http.createServer((req,res) => {
    req.movies = movies
    switch (req.method) {
        case "GET":
            GetReq(req, res);
            break;
            default: 
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            res.write(
                JSON.stringify({ title: "Not Found", message: "Route not Found" })
            );
            res.end();
    }
}) ;

server.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});