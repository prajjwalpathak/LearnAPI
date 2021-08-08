const express = require("express");
const request = require("request");
const path = require("path");


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=> {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    
    console.log(fName, lName, email);
});


app.listen(3000, ()=> {
    console.log("Server running at port 3000");
});