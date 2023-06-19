const http = require("http");

function handelRequest(request, response) {
  if (request.url === "/currenttime") {
    //localhost:3000/current time
    response.statusCode = 200;
    response.end("<h1>" + new Date().toISOString() + "<\h1>");
  } else if (request.url === "/") {
    //localhost:3000
    response.statusCode = 200;
    response.end("<h1>Hello World!<\h1>");
  }
}

const server = http.createServer(handelRequest);

server.listen(3000);
