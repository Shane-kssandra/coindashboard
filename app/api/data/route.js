let coinCount = 0; // store coin data in memory for now

// Handle GET request (frontend fetches this)
export async function GET() {
  return Response.json({ coins: coinCount });
}

// Handle POST request (ESP32 sends this)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (typeof body.coins === "number") {
      coinCount = body.coins;
      return Response.json({ success: true, coins: coinCount });
    } else {
      return Response.json({ success: false, error: "Invalid data" }, { status: 400 });
    }
  } catch (error) {
    return Response.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }
}
