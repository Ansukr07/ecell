import mongoose from "mongoose";

const gameStateSchema = new mongoose.Schema({
  gameId: { type: String, required: true, unique: true },
  isStarted: { type: Boolean, default: false },
});

const GameState =
  mongoose.models.GameState || mongoose.model("GameState", gameStateSchema);

export default GameState;
