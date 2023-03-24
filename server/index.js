const express = require("express");
const path = require('path');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PopmartModel = require("./models/Popmart");
require("dotenv").config({path: '.env.local'});

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
app.use(cors());

//to connect static frontend
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.get("/api/popmarts", async (req, res) => {
  try {
    //getting schema
    const popmarts = await PopmartModel.find({});
    res.json(popmarts);
  } catch (err) {
    res.send(err);
  }
});

app.post("/api/create", async (req,res) => {
    const popmart = req.body;
    const newPopmart = new PopmartModel(popmart);
    await newPopmart.save();
    res.json(popmart);
})

app.listen(3001, () => {
  console.log("server is running on port 3001");
});


module.exports = app; 