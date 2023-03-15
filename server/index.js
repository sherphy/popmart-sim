const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PopmartModel = require("./models/Popmart");
const vercelToken = 'EIGjq6rrcNHnz4hJdUFxN5j3';
const apiEndPt = 'https://api.vercel.com/v9/projects';
const fs = require('fs');
const axios = require('axios');


let config = {
  method: 'get',
  url: apiEndPt,
  headers: {
    Authorization: 'Bearer ' + vercelToken,
  },
};
let results = [];
 
(function loop() {
  axios(config)
    .then(function (response) {
      results.push(...response.data.projects);
      if (response.data.pagination.next !== null) {
        config.url = `${apiEndPt}?until=${response.data.pagination.next}`;
        loop();
      } else {
        //you can use the final results object and for example save it to a json file
        fs.writeFileSync('projects.json', JSON.stringify(results));
      }
    })
    .catch(function (error) {
      console.log(error);
    });
})();

//mongoose compass takes different connection url
//take the connection from the application side 
mongoose.connect(
  "mongodb+srv://sher:8x7_zLBH!RswEK_@cluster0.yu5pb2m.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
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
