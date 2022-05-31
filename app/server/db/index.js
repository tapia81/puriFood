const mongoose = require("mongoose");

let MONGO_URI =
  process.env.PROD_MONGODB ||
  process.env.MONGO_URI ||
  process.env.MONGODB_CONNECTION_STRING;

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Succesfully Connected to Database"))
  .catch((err) => console.error("Connection Error", err.message));

let db = mongoose.connection;
module.exports = db;
