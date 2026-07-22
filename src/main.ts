// Map: キーと値のセット (key-value)
// この場合、key は string, value は number になる
const userAges = new Map<string, number>();

userAges.set("Alice", 25); // Alice -> 25
userAges.set("Bob", 18); // Bob -> 18

console.log(userAges.get("Alice"));
console.log(userAges.has("Bob"));

// userAges.delete("Bob");

// console.log(userAges.has("Bob"));

for (const [name, age] of userAges) {
  // [Alice, 25]
  // [Bob, 18]
  console.log(`${name} (${age})`);
}
