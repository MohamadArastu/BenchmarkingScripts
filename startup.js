// Generate a large array of random integers
const size = 500000;
const data = Array.from({ length: size }, () =>
  Math.floor(Math.random() * 10000)
);

// Perform a series of transformations
const filtered = data.filter((num) => num % 2 === 0);
const mapped = filtered.map((num) => num * 2);
const sum = mapped.reduce((acc, val) => acc + val, 0);

console.log(
  `Processed ${size} integers, filtered ${filtered.length}, sum of transformed values is ${sum}.`
);
