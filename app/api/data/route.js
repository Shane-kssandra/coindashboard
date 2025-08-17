let count = 0;

export async function GET() {
  return Response.json({ count });
}

export async function POST(req) {
  const body = await req.json();
  count += body.value || 0;
  return Response.json({ count });
}

export async function DELETE() {
  count = 0;
  return Response.json({ count });
}
