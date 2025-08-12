"use client";
import React from "react";

export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>💰 Coin Counter Dashboard</h1>
      <div style={styles.counterBox}>
        <p style={styles.label}>Total Coins:</p>
        <p style={styles.value} id="coin-count">0</p>
      </div>
      <button style={styles.refreshButton} onClick={fetchCoinData}>
        Refresh
      </button>
    </main>
  );
}

// Simulated fetch function (replace later with ESP32 API)
function fetchCoinData() {
  const newCount = Math.floor(Math.random() * 100); // placeholder random number
  document.getElementById("coin-count")!.innerText = newCount.toString();
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "2rem",
  },
  title: {
    fontSize: "2rem",
  },
  counterBox: {
    background: "#f5f5f5",
    padding: "1rem",
    borderRadius: "10px",
    display: "inline-block",
    marginTop: "1rem",
  },
  label: {
    fontSize: "1.2rem",
    margin: 0,
  },
  value: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#0070f3",
  },
  refreshButton: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
