const mongoose = require("../db/connection");

const wineSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Type: { type: String, required: true },
  Variety: { type: String, required: true },
  Producer: { type: String, required: true },
  Vintage: { type: Number, required: true },
  Price: {
    Bottle: Number,
    Glass: Number,
    required: true,
  },
  Notes: [{ type: String, required: true }],
  Pairings: [{ ref: "Food", type: mongoose.Schema.Types.ObjectId }],
});

module.exports = mongoose.model("Wine", wineSchema);
