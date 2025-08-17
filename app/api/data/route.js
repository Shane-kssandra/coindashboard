// app/api/data/route.js
let coinCount = 0;

// GET current coin count
export async function GET() {
  return Response.json({ coinCount });
}

// POST new coin count (ESP32 sends here)
export async function POST(request) {
  try {
    const body = await request.json();
    if (typeof body.coinCount === "number") {
      coinCount = body.coinCount;
    }
    return Response.json({ success: true, coinCount });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
}

// DELETE = reset coin count
export async function DELETE() {
  coinCount = 0;
  return Response.json({ success: true, coinCount });
}
