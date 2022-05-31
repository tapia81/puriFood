const mongoose = require("mongoose");

let MONGO_URI =
  process.env.PROD_MONGODB ||
  process.env.MONGO_URI ||
  "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.hufat.mongodb.net/recipeData?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Succesfully Connected to Database"))
  .catch((err) => console.error("Connection Error", err.message));

let db = mongoose.connection;
module.exports = db;
