const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const db = require("./db/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", routes);

const PORT = process.env.PORT || 5000;
db.on("error", console.error.bind(console, "MongoDB Connection Error"));

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
