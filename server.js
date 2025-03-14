//To import express framework
const express = require("express");
const path = require("path");
//To create an express app
const app = express();
//To search files like images quickly in public
app.use(express.static("public"));

app.get("/", function (req, res) {
  //The main web page
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//To let server listener be 8080
app.listen(8080, function () {
  //To conveniently connect (click) to the server (localhost:8080) and print related console message
  console.log("http://localhost:8080 is running.");
});
