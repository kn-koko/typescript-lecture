console.log("test1");

try {
  const obj = JSON.parse("{ invalid json }");
  console.log("この行は実行されない");
} catch (error) {
  console.log("エラーが発生しました: ", error);
}

console.log("この行は実行される");
