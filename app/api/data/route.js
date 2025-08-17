let coinCount = 0; // keep value in memory

// GET - return current coin count
export async function GET() {
  return Response.json({ coinCount });
}

// POST - update coin count
export async function POST(request) {
  try {
    const body = await request.json();
    if (typeof body.coinCount === "number") {
      coinCount = body.coinCount; // update value
    }
    return Response.json({ coinCount });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
    });
  }
}

// DELETE - reset coin count
export async function DELETE() {
  coinCount = 0; // reset
  return Response.json({ coinCount });
}
