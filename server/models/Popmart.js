const mongoose = require("mongoose");

const PopmartSchema = new mongoose.Schema({
  mascot: {
    type: 'string',
    required: true,
  },
  series: {
    type: 'string',
    required: true,
  },
  name: {
    type:'string',
    required: true,
  },
  rarity: {
    type: 'string',
    enum: ["Secret", "Not secret"],
    default: "Not secret",
  },
  image: {
    type: 'string',
    required: true,
  },
  // Add any other fields you need for each Popmart item
});

const PopmartModel = mongoose.model("PopmartDB", PopmartSchema);

module.exports = PopmartModel;
