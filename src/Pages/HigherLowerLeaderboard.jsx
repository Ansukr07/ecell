import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// API is served from the same origin via Vercel serverless functions

export default function HigherLowerLeaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadLeaderboard = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/game/leaderboard`);
      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Failed to load leaderboard");
        return;
      }

      setLeaderboard(Array.isArray(data.leaderboard) ? data.leaderboard : []);
    } catch (err) {
      setError("Failed to load leaderboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeaderboard();
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] pt-24 px-4 pb-16 lb-grid-bg">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap');
        .lb-grid-bg {
          background-image: radial-gradient(#1a1c1c 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .lb-card {
          border: 4px solid #1a1c1c;
          box-shadow: 8px 8px 0px #1a1c1c;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-between items-center mb-8">
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              textTransform: "uppercase",
              fontStyle: "italic",
              lineHeight: 1,
              fontSize: "clamp(2rem, 6vw, 4rem)",
            }}
          >
            Event Leaderboard
          </h1>

          <div className="flex items-center gap-3">
            <button
              onClick={loadLeaderboard}
              className="px-4 py-2"
              style={{
                backgroundColor: "#0046fa",
                color: "#fff",
                border: "4px solid #1a1c1c",
                boxShadow: "6px 6px 0px #1a1c1c",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              Refresh
            </button>

            <Link
              to="/event-higher-lower"
              className="px-4 py-2"
              style={{
                backgroundColor: "#d4f000",
                color: "#1a1c1c",
                border: "4px solid #1a1c1c",
                boxShadow: "6px 6px 0px #bb0058",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Back to Game
            </Link>
          </div>
        </div>

        <div className="lb-card bg-white p-5 md:p-7">
          {loading && (
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              Loading leaderboard...
            </p>
          )}

          {!loading && error && (
            <p
              style={{
                backgroundColor: "#bb0058",
                color: "#fff",
                padding: "0.75rem",
                border: "3px solid #1a1c1c",
                fontWeight: 700,
              }}
            >
              {error}
            </p>
          )}

          {!loading && !error && leaderboard.length === 0 && (
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              No scores yet.
            </p>
          )}

          {!loading && !error && leaderboard.length > 0 && (
            <div className="space-y-3">
              {leaderboard.map((team, index) => (
                <div
                  key={team._id || `${team.teamName}-${index}`}
                  className="flex items-center justify-between px-4 py-3"
                  style={{
                    border: "3px solid #1a1c1c",
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#eef3ff",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    textTransform: "uppercase",
                  }}
                >
                  <span>
                    {index + 1}. {team.teamName}
                  </span>
                  <span>{team.score}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
