import { kv } from "@vercel/kv";

export async function GET() {
  const coinCount = (await kv.get("coinCount")) || 0;
  return Response.json({ coinCount });
}

export async function POST(request) {
  const body = await request.json();
  if (typeof body.coinCount === "number") {
    await kv.set("coinCount", body.coinCount);
  }
  const coinCount = await kv.get("coinCount");
  return Response.json({ coinCount });
}

export async function DELETE() {
  await kv.set("coinCount", 0);
  return Response.json({ coinCount: 0 });
}
