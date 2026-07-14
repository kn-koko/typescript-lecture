class CalculationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CalculationError";
  }
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new CalculationError("0で割ることは出来ません");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  if (error instanceof CalculationError) {
    console.log("計算のやり直し");
  } else {
    console.log("予期せぬエラー: ", error);
  }
} finally {
  console.log("この処理は絶対に実行される");
}
