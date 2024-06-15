const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection succeeded.");
  })
  .catch((err) => {
    console.log(
      "Error in MongoDB connection: " + JSON.stringify(err, undefined, 2)
    );
  });

require("./user.model");
