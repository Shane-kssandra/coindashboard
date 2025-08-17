"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [coinCount, setCoinCount] = useState(0);

  // Fetch coin count periodically
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        const data = await res.json();
        setCoinCount(data.coinCount);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 2000); // refresh every 2s
    return () => clearInterval(interval);
  }, []);

  // Reset handler
  const handleReset = async () => {
    try {
      const res = await fetch("/api/data", {
        method: "DELETE",
      });
      const data = await res.json();
      setCoinCount(data.coinCount);
    } catch (err) {
      console.error("Error resetting:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Coin Counter</h1>
      <p className="text-2xl mb-4">Total Coins: {coinCount}</p>
      <button
        onClick={handleReset}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Reset
      </button>
    </div>
  );
}
