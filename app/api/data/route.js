// app/api/data/route.js
let coinCount = 0;

export async function GET() {
  return Response.json({ coinCount });
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (typeof body.coinCount === "number") {
      coinCount = body.coinCount;
    }
    return Response.json({ success: true, coinCount });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
}
