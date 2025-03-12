//To import express framework
const express = require("express");
//To create an express app
const app = express();
//To search files like images quickly in public
app.use(express.static("public"));

app.get("/", function (req, res) {
  //The main web page
  res.send(`
    <!DOCTYPE html>
    <html lang = "en">
    <head>
    <meta charset= "utf-8">
    <title>Hongming Liu's First Web Page</title>

    <!-- To add CSS styles to make the web page more beautiful -->

    <style>
    body {
     margin: 0;
     text-align: center;
     font-family: 'Times New Roman', Times, serif;
     font-style: italic;
     background-color: rgba(255, 255, 255, 0.58);
     font-size: 24px;
     text-shadow: 1.5px 1.5px 1.5px grey;
          }
     h1 {
     font-size: 48px;
     color:rgb(86, 114, 230);
        }
     h2 {
     font-size: 36px;
     color: rgb(20, 77, 152);
        }
    </style>
    </head>
    <!-- The main body content -->
    <body>
        <h2>Author: Hongming Liu</h2>
        <h1>This is my first web page for SIT323-2025.</h1>
        <img src="/Icon.jpg" alt="School Icon" width="200" height="200">
    </body>
    </html>
    `);
});

//To let server listener be 8080
app.listen(8080, function () {
  //To conveniently connect (click) to the server (localhost:8080) and print related console message
  console.log("http://localhost:8080 is listening.");
});
