const express = require("express");
const request = require("request");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName
                },
                email_address: email,
                status: "subscribed",
            },
        ],
    };

    const jsonData = JSON.stringify(data);
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
});

//API Key b73fc773d50ad60e3db9eab72148892a-us5

//List ID 6e3656cb28
