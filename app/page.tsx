"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [coinCount, setCoinCount] = useState(0);

  // Fetch latest coin count from API
  const fetchCoins = async () => {
    try {
      const res = await fetch("/api/data");
      const data = await res.json();
      setCoinCount(data.coinCount);
    } catch (err) {
      console.error("Error fetching coins:", err);
    }
  };

  // Reset coins (DELETE request)
  const resetCoins = async () => {
    try {
      await fetch("/api/data", { method: "DELETE" });
      setCoinCount(0);
    } catch (err) {
      console.error("Error resetting coins:", err);
    }
  };

  // Poll every 2s
  useEffect(() => {
    fetchCoins();
    const interval = setInterval(fetchCoins, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-2xl mb-4">💰 Coin Counter</h1>
      <p className="text-lg">Coins inserted:</p>
      <h2 className="text-6xl font-bold text-blue-500">{coinCount}</h2>
      <button
        onClick={resetCoins}
        className="mt-6 px-6 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold"
      >
        Reset
      </button>
    </div>
  );
}
