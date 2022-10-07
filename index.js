const http = require('http');
// require("dotenv").config();
const GetReq = require('./routes/GetRequet');
const PostReq = require('./routes/PostRequest');
const PulReq = require('./routes/PutRequest')
const DeleteReq  =require('./routes/DeleteRequest');

let movies = require('./api/movies.json');
const DeleteRequest = require('./routes/DeleteRequest');


const PORT = process.env.PORT || 5001;

// Creating HTTP server :

const server = http.createServer((req,res) => {
    req.movies = movies
    switch (req.method) {
        case "GET":
            GetReq(req, res);
            break;
        case "POST":
            PostReq(req, res);
            break;
        case "PUT":
            PulReq(req,res);
            break;
            case "DELETE":
            DeleteReq(req,res);
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

//3711087e-2863-427e-86d8-1548c3e7b0db