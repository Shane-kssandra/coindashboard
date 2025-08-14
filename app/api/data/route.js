// In-memory store (resets on redeploy/cold start)
let latestCoinCount = 0;

export async function GET() {
  return new Response(JSON.stringify({ coins: latestCoinCount }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const n = Number(body?.coins);
    if (!Number.isFinite(n) || n < 0) {
      return new Response(JSON.stringify({ error: "Invalid 'coins' value" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    latestCoinCount = n;
    return new Response(JSON.stringify({ ok: true, coins: latestCoinCount }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Bad JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
