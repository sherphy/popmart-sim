const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PopmartModel = require("./models/Popmart");

//mongoose compass takes different connection url
//take the connection from the application side 
mongoose.connect(
  "mongodb+srv://sher:8x7_zLBH!RswEK_@cluster0.yu5pb2m.mongodb.net/?retryWrites=true&w=majority"
);

app.use(bodyParser.json());
app.use(express.static('src'));
app.use(cors());

app.get("/", async (req, res) => {
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
