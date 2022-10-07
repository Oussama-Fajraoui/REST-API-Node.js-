const http = require('http');
// require("dotenv").config();

const PORT = process.env.PORT || 5001;

// Creating HTTP server :

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', "application/json")
    res.write(JSON.stringify({message: "Hello world"}))
    res.end()
}) ;

server.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});