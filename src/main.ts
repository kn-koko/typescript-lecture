// RegExp (Regular Expression): 正規表現

// hello, Hello, hElLo, ...
const pattern = /hello/i;

console.log(pattern.test("Hello, world"));
console.log(pattern.test("goodbye"));

const text = "Typescript is great!";
const replacedText = text.replace(/typescript/i, "JavaScript");

console.log(replacedText);
