// Simple in-memory store
let coinCount = 0;

export async function GET() {
  return Response.json({ coinCount });
}

export async function POST(request) {
  const { count } = await request.json();
  coinCount = count;
  return Response.json({ message: "Count updated", coinCount });
}

export async function DELETE() {
  coinCount = 0;
  return Response.json({ message: "Count reset", coinCount });
}