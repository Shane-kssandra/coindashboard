let coins = 0; // simple in-memory store

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ coins });
  } else if (req.method === "POST") {
    const { coins: newCoins } = req.body;
    coins = newCoins; // overwrite value
    res.status(200).json({ message: "Coin count updated", coins });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
