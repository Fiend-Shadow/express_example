const express = require("express");

const port = 3000;

const app = express();

app.use(express.static("./public"));


app.get("/",(req,res,next) => {
    // console.log("HTTP Method", req.method);
    res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about",(req,res,next) => {
    // console.log("HTTP Method", req.method);
    res.sendFile(__dirname +"/public/views/about.html");
});

app.listen(port, () => {
    console.log("serveris running");
});
