function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("0で割ることは出来ません");
  }
  return a / b;
}

try {
  console.log(divide(10, 2))
  console.log(divide(10, 0))
} catch (error) {
  console.error((error as Error).message);
} finally {
  console.log("計算終了")
}
