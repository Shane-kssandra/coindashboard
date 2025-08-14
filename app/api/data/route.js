// app/api/data/route.js

let latestCoinCount = 0; // shared between GET and POST

export async function GET() {
  return new Response(
    JSON.stringify({ coins: latestCoinCount }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (body && typeof body.coins === "number") {
      latestCoinCount = body.coins; // store value from ESP32
      return new Response("OK", { status: 200 });
    } else {
      return new Response("Invalid data", { status: 400 });
    }
  } catch (error) {
    return new Response("Bad Request", { status: 400 });
  }
}
