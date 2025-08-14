let latestCoinCount = 0;

export async function GET() {
  return new Response(
    JSON.stringify({ coins: latestCoinCount }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

export async function POST(req) {
  try {
    const body = await req.json();
    latestCoinCount = body.coins;
    console.log("Coin count updated to:", latestCoinCount);
    return new Response("OK", { status: 200 });
  } catch (error) {
    return new Response("Invalid JSON", { status: 400 });
  }
}
