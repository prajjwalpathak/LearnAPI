const express = require("express");
const request = require("request");
const https = require("https");
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
                status: "subscribed"
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    url = 'https://us5.api.mailchimp.com/3.0/lists/6e3656cb28';
    options = {
        method: "POST",
        auth: "prajjwalpathak:bce8d47555d9881922490f23b44bf1f9-us5"
    };

    const request = https.request(url, options, (response)=> {
        if(response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }
        else {
            res.sendFile(__dirname + "/failure.html");
        }
    });

    request.write(jsonData);
    request.end();


});

app.post("/failure", (req, res)=> {
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
});

//API Key bce8d47555d9881922490f23b44bf1f9-us5

//List ID 6e3656cb28
