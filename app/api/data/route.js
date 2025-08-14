let latestCoinCount = 0;

export async function GET() {
  return new Response(
    JSON.stringify({ coins: latestCoinCount }),
    { status: 200, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
  );
}

export async function POST(req) {
  const body = await req.json();
  latestCoinCount = body.coins;
  return new Response("OK", { status: 200, headers: { "Access-Control-Allow-Origin": "*" } });
}

// Optional: Handle OPTIONS (CORS preflight)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
