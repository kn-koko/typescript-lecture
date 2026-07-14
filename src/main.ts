function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("0で割ることは出来ません");
  }
  return a / b;
}

try {
  const result = divide(10, 2);
  console.log(result);
} catch (error) {
  console.error((error as Error).message);
} finally {
  console.log("この処理は絶対に実行される");
}
