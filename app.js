const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

// middlewares
app.use(cors());
app.use(express.json());

// routes
const sectorRoutes = require("./routes/sector.routes");
const responseRoutes = require("./routes/response.routes");

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running properly!",
  });
});

app.use("/api/v1/sectors", sectorRoutes);
app.use("/api/v1/response", responseRoutes);

module.exports = app;
