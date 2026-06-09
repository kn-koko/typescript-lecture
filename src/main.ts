import { Book } from "./book";

// Bookクラスの動作確認用コード
const book1 = new Book("走れメロス", "太宰治", 3);

// 初期状態を確認
console.log(book1.getStatus());

// book1 を貸出
const result = book1.borrow(2);
console.log(book1.getStatus());
console.log(`貸出成功: ${result}`);

// もう一度貸出（変化しないことを確認）
const result2 = book1.borrow(3);
console.log(book1.getStatus());
console.log(`貸出成功: ${result2}`);

// 返却
book1.returnBook(2);
console.log(book1.getStatus());
