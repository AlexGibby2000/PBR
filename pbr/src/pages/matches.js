import { useState } from "react";

export default function Matches() {
  const [matches, setMatches] = useState([
    {
      id: 1,
      player1: "Alex",
      player2: "John",
      score: "11-8",
      winner: "Alex",
      date: "2024-02-13",
    },
    {
      id: 2,
      player1: "Emily",
      player2: "Sarah",
      score: "9-11",
      winner: "Sarah",
      date: "2024-02-12",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Match History
      </h1>

      <div className="mt-6 max-w-3xl mx-auto">
        {matches.length === 0 ? (
          <p className="text-gray-500 text-center">No matches recorded yet.</p>
        ) : (
          <ul className="space-y-4">
            {matches.map((match) => (
              <li key={match.id} className="bg-white p-4 rounded-lg shadow">
                <p className="text-lg font-semibold">
                  {match.player1} vs {match.player2}
                </p>
                <p className="text-gray-600">
                  Score: <span className="font-bold">{match.score}</span>
                </p>
                <p className="text-green-600">Winner: {match.winner}</p>
                <p className="text-sm text-gray-500">{match.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
