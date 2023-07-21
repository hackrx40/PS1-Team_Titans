require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(cors());


app.listen(process.env.PORT || 8000, () => {
  console.log("Listening server on port : ", process.env.PORT || 8000);
});