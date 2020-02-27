var util = require("util"), http = require("http");
var url = require("url");
const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(":memory:", (err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log("Connected to in memory db");
});

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    var q = url.parse(request.url,true).query;
    var result = q.year+ " " + q.month;
    response.write(result);
    response.end();
}).listen(8080);

console.log("Server running on http://localhost:8080/")