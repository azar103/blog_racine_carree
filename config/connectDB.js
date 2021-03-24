const mongoose = require("mongoose");
const config = require("config");
const connectDB = () => {
  const db = config.get("mongodbUri");
  mongoose.connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    (err) => {
      if (err) {
        console.log("mongodb not connected!!");
        console.dir(err);
      } else {
        console.log("mongodb connected...");
      }
    }
  );
};
module.exports = connectDB;
