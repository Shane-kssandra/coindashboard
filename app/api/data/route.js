// app/api/data/route.js

export const runtime = "nodejs";         // run on Node (not Edge)
export const dynamic = "force-dynamic";  // don't cache

let latestCoinCount = 0;

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function GET() {
  return new Response(
    JSON.stringify({ coins: latestCoinCount }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
        ...cors,
      },
    }
  );
}

export async function POST(req) {
  try {
    const body = await req.json();            // expects {"coins": <number>}
    if (typeof body?.coins !== "number") {
      return new Response("Invalid data", { status: 400, headers: cors });
    }
    latestCoinCount = body.coins;
    return new Response("OK", { status: 200, headers: cors });
  } catch {
    return new Response("Bad Request", { status: 400, headers: cors });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      ...cors,
      "Content-Length": "0",
    },
  });
}
