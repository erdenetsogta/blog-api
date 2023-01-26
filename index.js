const express = require("express");
const cors = require("cors");
const { v4 } = require("uuid");

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const categories = [
    {
        id: v4(),
        name: "Politics",
    },
    {
        id: v4(),
        name: "Sport",
    },
];

app.get("/categories", (req, res) => {
    res.json(categories);
});

app.get("/categories/:id", (req, res) => {
    const { id } = req.params;
    const one = categories.find((category) => category.id === id);
    if (one) {
        res.json(one);
    } else {
        res.sendStatus(404);
    }
});

app.post("/categories", (req, res) => {
    const { name } = req.body;
    categories.push({ id: v4(), name: name });
    res.sendStatus(201);
});

app.listen(port, () => {
    console.log("App is listering at port", port);
});
