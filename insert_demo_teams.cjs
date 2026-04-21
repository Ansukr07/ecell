const mongoose = require("mongoose");
require("dotenv").config({ path: "./backend/.env" });

const gameTeamSchema = new mongoose.Schema({
  teamName: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  score: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});
const GameTeam =
  mongoose.models.GameTeam || mongoose.model("GameTeam", gameTeamSchema);

async function insertTeams() {
  await mongoose.connect(process.env.MONGODB_URI);
  const demoTeams = [
    { teamName: "demo1", password: "password123" },
    { teamName: "alpha", password: "alpha" },
    { teamName: "beta", password: "beta" },
  ];
  for (let t of demoTeams) {
    await GameTeam.findOneAndUpdate({ teamName: t.teamName }, t, {
      upsert: true,
    });
  }
  console.log("Demo teams inserted");
  mongoose.disconnect();
}
insertTeams();
