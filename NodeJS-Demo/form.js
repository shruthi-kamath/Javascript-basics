//to get responding page
const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.use(express.urlencoded({extended: false}));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "<h1>");
}); //localhost:3000/current time

app.get("/", function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><lable>Your Name : </lable><input type='text' name='username'><button>Submit</submit></form>"
  ); 
}); //localhost:3000/

app.post("/store-user", function(req, res){
    const username = req.body.username;
    //console.log(username);
    const filepath = path.join(__dirname, "data", "users.json");
    const filedata = fs.readFileSync(filepath);
    const existingUsers = JSON.parse(filedata);

    existingUsers.push(username);
    fs.writeFileSync(filepath,JSON.stringify(existingUsers));
    res.send("<h1>Username Stored!</h1>");
});

app.get("/users", function(req, res){
    const filepath = path.join(__dirname, "data", "users.json");
    const filedata = fs.readFileSync(filepath);
    const existingUsers = JSON.parse(filedata);

    let responseData = "<ul>";
    for(const user of existingUsers) {
        responseData += "<li>" + user + "</li>";
    }

    responseData += "</ul>";

    res.send(responseData);
});

app.listen(3000);
