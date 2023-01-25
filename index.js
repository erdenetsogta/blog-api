const express = require("express");
const cors = require("cors");

const port = 3000;
const app = express();

const users = [];

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/users/save", (req, res) => {
    users.push({ name: "Bat" });
    res.json(users);
});

app.listen(port, () => {
    console.log("App is listering at port", port);
});
