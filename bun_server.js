// Precompute a temp dataset
const largeArray = Array.from({ length: 100000 }, (_, i) => ({
  index: i,
  value: Math.random(),
}));

Bun.serve({
  port: 6000,
  fetch(req) {
    const subset = largeArray.slice(0, 1000);
    return new Response(
      JSON.stringify({
        message: "Hello from Bun",
        subsetLength: subset.length,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  },
});

console.log("Bun server listening on port 6000");
