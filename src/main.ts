class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

/**
  * itemInput: string 商品名
  * quantityInput: string 購入数量
  * stock: number 在庫数
  */
function purchase(itemInput: string, quantityInput: string, stock: number): void {
  // 商品名が空（trim して長さ0）
  // "  apple  " -- (trim) -> "apple"
  // "  " -- (trim) -> ""
  if (itemInput.trim().length === 0) {
    throw new ValidationError("商品名を入力してください。");
  }

  // 数量が1以上の整数でない（Number.isInteger でない or <= 0）
  //   → ValidationError("数量は1以上の整数で入力してください。")
  const quantity = Number(quantityInput);
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new ValidationError("数量は1以上の整数で入力してください");
  }

  // 数量 > 在庫 → ValidationError("在庫が不足しています…")
  if (quantity > stock) {
    throw new ValidationError("在庫が不足しています…")
  }

  console.log("購入しました");
}


function onPurchase(itemInput: string, quantityInput: string, stock: number): void {
  // purchase の例外でクラッシュしないように、 try-catch-finally で括る。
  // 例外が ValidationError の場合は console.error でメッセージを表示し、
  // 想定外のエラーは 想定外のエラーが発生しました と表示する。
  // onPurchase の成功・失敗に関わらず、処理が完了したら 購入処理が完了しました と console.log に表示する。

  try {
    purchase(itemInput, quantityInput, stock);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(error.message);
    } else {
      console.error("想定外のエラーが発生しました");
    }
  } finally {
    console.log("購入処理が完了しました");
  }
}

onPurchase("りんご", "3", 10); // 購入しました: りんご × 3
onPurchase("", "3", 10);       // ⚠️ 商品名を入力してください。
onPurchase("みかん", "0", 10); // ⚠️ 数量は1以上の整数で入力してください。
onPurchase("ぶどう", "20", 5); // ⚠️ 在庫が不足しています（在庫: 5）。
