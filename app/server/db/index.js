const mongoose = require("mongoose");

let MONGO_URI =
  process.env.PROD_MONGODB || process.env.MONGO_URI || "mongo URI";

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Succesfully Connected to Database"))
  .catch((err) => console.error("Connection Error", err.message));

let db = mongoose.connection;
module.exports = db;
