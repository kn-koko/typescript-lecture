class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

// 奥のロジック：不正ならガード節で早めにthrow
function registerUser(nameInput: string, ageInput: string): void {
  const name = nameInput.trim();
  if (name.length === 0) {
    throw new ValidationError("名前を入力してください。");
  }

  const age = Number(ageInput);
  if (!Number.isFinite(age) || age < 0) {
    throw new ValidationError("年齢は0以上の数値で入力してください。");
  }

  console.log(`登録しました: ${name} (${age}歳)`);
}

// 画面に近い側：catchしてユーザーに伝える
function onSubmit(nameInput: string, ageInput: string): void {
  try {
    registerUser(nameInput, ageInput);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      console.error(`⚠️ ${error.message}`); // 画面に出す想定
    } else {
      console.error("想定外のエラーが発生しました。", error);
    }
  }
}

onSubmit("Alice", "25");
onSubmit("", "25");
onSubmit("Bob", "Charlie");
