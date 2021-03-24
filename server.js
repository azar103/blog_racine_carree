const express = require("express");
const connectDB = require("./config/connectDB");
const bookRouter = require("./routers/book");
const app = express();
app.use(express.json());

connectDB();

app.use("/api/books", bookRouter);
const port = 5000;
app.listen(port, (err) => {
  if (err) {
    console.log("server not connected");
  }
  console.log(`server is running on port ${port}...`);
});
