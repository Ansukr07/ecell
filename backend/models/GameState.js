const mongoose = require("mongoose");

const gameStateSchema = new mongoose.Schema({
  gameId: { type: String, required: true, unique: true },
  isStarted: { type: Boolean, default: false },
});

const GameState = mongoose.model("GameState", gameStateSchema);

module.exports = GameState;
