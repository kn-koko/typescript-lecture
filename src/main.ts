const uniqueNumbers = new Set<number>();

uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);

console.log(uniqueNumbers);
console.log(uniqueNumbers.has(1));
console.log(uniqueNumbers.size);

for (const num of uniqueNumbers) {
  console.log(num);
}
