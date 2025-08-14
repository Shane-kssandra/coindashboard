"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        const el = document.getElementById("coin-count");
        if (el) el.innerText = data.coins;
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <h1>Coin Counter</h1>
      <p>Coins: <span id="coin-count">0</span></p>
    </main>
  );
}
