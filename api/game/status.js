import connectDB from "../_db.js";
import GameState from "../_GameState.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    await connectDB();

    if (req.method === "GET") {
      let state = await GameState.findOne({ gameId: "higher-lower" });
      if (!state) {
        state = await GameState.create({
          gameId: "higher-lower",
          isStarted: false,
        });
      }
      return res
        .status(200)
        .json({ success: true, isStarted: state.isStarted });
    }

    if (req.method === "POST") {
      const { action } = req.body;
      const isStarted = action === "start";

      const state = await GameState.findOneAndUpdate(
        { gameId: "higher-lower" },
        { isStarted },
        { new: true, upsert: true },
      );

      return res
        .status(200)
        .json({ success: true, isStarted: state.isStarted });
    }

    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
