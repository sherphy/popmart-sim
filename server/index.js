const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PopmartModel = require("./models/Popmart");

mongoose.connect(
  "mongodb+srv://sher:8x7_zLBH!RswEK_@cluster0.yu5pb2m.mongodb.net/?retryWrites=true&w=majority"
);

app.use(express.json());

app.get("/", async (req, res) => {
  try {
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
