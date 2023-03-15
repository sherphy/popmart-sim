const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PopmartModel = require("./models/Popmart");
require("dotenv").config();

const db = process.env.DB_URL;
//mongoose compass takes different connection url
//take the connection from the application side 
mongoose.connect(
  `${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.json());
app.use(express.static('src'));
app.use(cors());

app.get("/popmarts", async (req, res) => {
  try {
    //getting schema
    const popmarts = await PopmartModel.find({});
    res.json(popmarts);
  } catch (err) {
    res.send(err);
  }
});

app.post("/create", async (req,res) => {
    const popmart = req.body;
    const newPopmart = new PopmartModel(popmart);
    await newPopmart.save();
    res.json(popmart);
})

app.listen(3001, () => {
  console.log("server is running on port 3001");
});


module.exports = app;