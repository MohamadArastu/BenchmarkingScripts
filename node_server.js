const http = require("http");

// Precompute a temp dataset
const largeArray = Array.from({ length: 100000 }, (_, i) => ({
  index: i,
  value: Math.random(),
}));

const server = http.createServer((req, res) => {
  // Simulate some lightweight processing on each request:
  const subset = largeArray.slice(0, 1000);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "Hello from Node.js",
      subsetLength: subset.length,
    })
  );
});

server.listen(3000, () => {
  console.log("Node.js server listening on port 3000");
});
