// app/api/data/route.js
export async function GET() {
  return new Response(
    JSON.stringify({ coins: 42 }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
