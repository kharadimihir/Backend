require('dotenv').config();
const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("This is the home page of the webpage");
})

app.get("/insta", (req, res) => {
    res.send("This the another page of the website");
})

app.get("/login", (req, res) => {
    res.send("<h1>Welcome to the login page</h1>");
})

app.listen(process.env.PORT, () =>{
    console.log(`example app listening on port ${port}`);
})