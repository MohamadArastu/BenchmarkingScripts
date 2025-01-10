// Precompute a temp dataset
const largeArray = Array.from({ length: 100000 }, (_, i) => ({
  index: i,
  value: Math.random(),
}));

// Using Deno's serve function from remote std:
import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

serve(
  (req) => {
    const subset = largeArray.slice(0, 1000);
    return new Response(
      JSON.stringify({
        message: "Hello from Deno",
        subsetLength: subset.length,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  },
  { port: 4000 }
);
