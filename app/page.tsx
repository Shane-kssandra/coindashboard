"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [coinCount, setCoinCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/data");
        const data = await res.json();
        setCoinCount(data.count);
      } catch (err) {
        console.error("Error fetching coin count:", err);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  async function resetCounter() {
    try {
      const res = await fetch("/api/data", { method: "DELETE" });
      const data = await res.json();
      setCoinCount(data.count); // should reset to 0
    } catch (err) {
      console.error("Error resetting counter:", err);
    }
  }

  return (
    <div style={{
      backgroundColor: "black",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white"
    }}>
      <h1 style={{ fontSize: "2rem" }}>💰 Coin Counter</h1>
      <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>Coins inserted:</p>
      <p style={{ fontSize: "3rem", fontWeight: "bold", color: "blue" }}>
        {coinCount}
      </p>
      <button 
        onClick={resetCounter}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1rem",
          borderRadius: "8px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        🔄 Reset
      </button>
    </div>
  );
}
