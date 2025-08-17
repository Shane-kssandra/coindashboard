"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [coins, setCoins] = useState<number>(0);

  useEffect(() => {
    let mounted = true;

    async function fetchCoins() {
      try {
        const res = await fetch("/api/data", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (mounted) setCoins(data.coins ?? 0);
      } catch {}
    }

    fetchCoins();                    // initial
    const id = setInterval(fetchCoins, 2000); // poll every 2s
    return () => { mounted = false; clearInterval(id); };
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", textAlign: "center", padding: 24 }}>
      <h1>💰 Coin Counter</h1>
      <p style={{ fontSize: 18, marginTop: 16 }}>Coins inserted:</p>
      <div style={{ fontSize: 48, fontWeight: 700, color: "#0070f3" }}>{coins}</div>
    </main>
  );
}
