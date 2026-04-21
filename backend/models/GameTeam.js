const mongoose = require("mongoose");

const gameTeamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  hasPlayed: {
    type: Boolean,
    default: false,
  },
  isDemoAdmin: {
    type: Boolean,
    default: false,
  },
  playedAt: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("GameTeam", gameTeamSchema);
