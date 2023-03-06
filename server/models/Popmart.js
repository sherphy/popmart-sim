const mongoose = require("mongoose");

const PopmartSchema = new mongoose.Schema({
  mascot: {
    type: String,
    required: true,
    enum: ["SkullPanda", "Dimoo"]
  },
  series: {
    type: String,
    required: true,
    enum: ["The Mare of Animals"],
  },
  name: {
    type: String,
    required: true,
  },
  rarity: {
    type: String,
    required: true,
    enum: ["Secret", "Not secret"],
    default: "Not Rare",
  },
  image: {
    type: String,
    required: true,
  },
  // Add any other fields you need for each Popmart item
});

const PopmartModel = mongoose.model("Popmart", PopmartSchema);
module.exports = PopmartModel;
