let latestCoinCount = 0; // variable shared between GET & POST

export async function GET() {
  return new Response(
    JSON.stringify({ coins: latestCoinCount }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

export async function POST(req) {
  try {
    const body = await req.json();
    latestCoinCount = body.coins; // update from ESP32
    console.log("Coin count updated to:", latestCoinCount);
    return new Response("OK", { status: 200 });
  } catch (error) {
    return new Response("Invalid JSON", { status: 400 });
  }
}
