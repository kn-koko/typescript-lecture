const now = new Date();

console.log(now.toISOString());
console.log(now.toLocaleString("ja-JP"));

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate()); // 23

const futureDate = new Date();
console.log(futureDate.toLocaleString("ja-JP"));
futureDate.setDate(now.getDate() + 7);
console.log(futureDate.toLocaleString("ja-JP"));
futureDate.setMonth(3);
console.log(futureDate.toLocaleString("ja-JP"));
