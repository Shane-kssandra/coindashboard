"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/data");
      const data = await res.json();
      setCoins(data.coins);
    };

    fetchData();
    const interval = setInterval(fetchData, 2000); // auto-refresh
    return () => clearInterval(interval);
  }, []);

  // ✅ Reset handler
  const resetCoins = async () => {
    await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ coins: 0 }),
    });
    setCoins(0); // update UI immediately
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-6">💰 Coin Dashboard</h1>
      <div className="text-2xl mb-4">Total Coins: {coins}</div>

      {/* ✅ Reset Button */}
      <button
        onClick={resetCoins}
        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Reset Coins
      </button>
    </main>
  );
}
