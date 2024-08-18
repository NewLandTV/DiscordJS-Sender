const express = require("express");
const { SendMessage } = require("./index.js");

const app = express();
const port = 2991;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    const msg = `Sender : ${req.body.msg}`;

    console.log(msg);

    SendMessage(msg);

    res.sendFile(__dirname + "/index.html");
});

function KeepAlive() {
    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
}

module.exports = { KeepAlive };