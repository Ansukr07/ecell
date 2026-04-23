const mongoose = require("mongoose");

const HitCounterSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0,
  },
  lastHit: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("HitCounter", HitCounterSchema);
