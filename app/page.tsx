"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [coinCount, setCoinCount] = useState(0);

  // Fetch current count from API
  async function fetchCount() {
    const res = await fetch("/api/data");
    const data = await res.json();
    setCoinCount(data.count);
  }

  // Reset counter
  async function resetCount() {
    await fetch("/api/data", { method: "DELETE" });
    fetchCount();
  }

  useEffect(() => {
    fetchCount();
    const interval = setInterval(fetchCount, 2000); // refresh every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-2xl mb-2">💰 Coin Counter</h1>
        <p className="text-lg">Coins inserted:</p>
        <p className="text-5xl font-bold text-blue-500">{coinCount}</p>

        {/* Reset Button */}
        <button
          onClick={resetCount}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
