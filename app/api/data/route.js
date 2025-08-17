let coinCount = 0;

// Handle GET request → return current count
export async function GET() {
  return new Response(JSON.stringify({ coinCount }), {
    headers: { "Content-Type": "application/json" },
  });
}

// Handle POST request → update count
export async function POST(req) {
  const body = await req.json();
  if (typeof body.coinCount === "number") {
    coinCount = body.coinCount;
  }
  return new Response(JSON.stringify({ success: true, coinCount }), {
    headers: { "Content-Type": "application/json" },
  });
}

// Handle DELETE request → reset count
export async function DELETE() {
  coinCount = 0;
  return new Response(JSON.stringify({ success: true, coinCount }), {
    headers: { "Content-Type": "application/json" },
  });
}
