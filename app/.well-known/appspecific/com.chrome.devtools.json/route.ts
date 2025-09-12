export function GET() {
  // Silence Chrome DevTools well-known probe with an empty JSON response
  return new Response("{}", {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // Cache for a day to reduce repeated requests
      "Cache-Control": "public, max-age=86400"
    }
  });
}
