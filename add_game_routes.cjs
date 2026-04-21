const fs = require("fs");
const file = "backend/server.js";
let content = fs.readFileSync(file, "utf8");

const gameTeamModelImport = `const GameTeam = require('./models/GameTeam');\n`;
if (!content.includes("GameTeam")) {
  content = content.replace(
    "const Idea = require('./models/Idea');",
    "const Idea = require('./models/Idea');\n" + gameTeamModelImport,
  );
}

const gameRoutes = `

// ===== EVENT HIGHER OR LOWER GAME ROUTES =====

// Check team login
app.post('/api/game/login', async (req, res) => {
  try {
    const { teamName, password } = req.body;
    const team = await GameTeam.findOne({ teamName, password });
    
    if (!team) {
      return res.status(401).json({ success: false, error: 'Invalid team name or password' });
    }
    
    res.json({ success: true, team });
  } catch (error) {
    console.error('Error logging in team:', error);
    res.status(500).json({ success: false, error: 'Failed to login' });
  }
});

// Update score
app.post('/api/game/score', async (req, res) => {
  try {
    const { teamId, score } = req.body;
    const team = await GameTeam.findById(teamId);
    
    if (!team) {
      return res.status(404).json({ success: false, error: 'Team not found' });
    }
    
    if (score > team.score) {
        team.score = score;
        await team.save();
    }
    
    res.json({ success: true, team });
  } catch (error) {
    console.error('Error updating score:', error);
    res.status(500).json({ success: false, error: 'Failed to update score' });
  }
});

// Get leaderboard
app.get('/api/game/leaderboard', async (req, res) => {
  try {
    const teams = await GameTeam.find().sort({ score: -1 }).select('-password');
    res.json({ success: true, leaderboard: teams });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch leaderboard' });
  }
});

`;

if (!content.includes("/api/game/login")) {
  content = content.replace(
    "// Error handling middleware",
    gameRoutes + "// Error handling middleware",
  );
  fs.writeFileSync(file, content);
  console.log("Game routes added.");
} else {
  console.log("Game routes already exist.");
}
