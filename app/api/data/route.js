// app/api/data/route.js
let latestCoinCount = 0; // variable shared between GET & POST

export async function GET() {
  return new Response(
    JSON.stringify({ coins: latestCoinCount }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

export async function POST(req) {
  const body = await req.json();
  latestCoinCount = body.coins; // update from ESP32
  return new Response("OK", { status: 200 });
}
