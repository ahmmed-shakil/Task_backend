const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log("Database connection is succesful".bgRed.white.bold);
});

// server
const port = process.env.PORT || 8080;

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`.bgYellow.black.bold);
});

process.on("unhandledRejection", (err) => {
  console.log(err.message);
  process.exit(1);
});
