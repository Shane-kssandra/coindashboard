let coinCount = 0; // stored in memory

export default function handler(req, res) {
  if (req.method === "POST") {
    // ESP32 will send { count: X }
    const { count } = req.body;
    coinCount = count;
    return res.status(200).json({ success: true, count: coinCount });
  }

  if (req.method === "GET") {
    // frontend fetches this
    return res.status(200).json({ count: coinCount });
  }

  if (req.method === "DELETE") {
    // reset endpoint
    coinCount = 0;
    return res.status(200).json({ success: true, count: coinCount });
  }

  res.status(405).json({ error: "Method not allowed" });
}
