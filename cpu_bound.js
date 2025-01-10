function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const limit = 500000;
let count = 0;
for (let i = 2; i <= limit; i++) {
  if (isPrime(i)) count++;
}
console.log(`Found ${count} primes up to ${limit}.`);
