const express = require("express");
const cors = require("cors");
const { categoryRouter } = require("./routes/categoryController");
const { articleRouter } = require("./routes/articleController");

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/categories", categoryRouter);
app.use("/articles", articleRouter);

app.listen(port, () => {
    console.log("App is listering at port", port);
});
