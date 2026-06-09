export class Book {
  private readonly title: string;
  private readonly author: string;
  private stock: number; // 在庫

  constructor(title: string, author: string, stock: number) {
    this.title = title;
    this.author = author;
    this.stock = stock;
  }

  public borrow(amount: number): boolean {
    if (this.stock < amount) {
      return false;
    }
    this.stock -= amount;
    return true;
  }

  public returnBook(amount: number): void {
    this.stock += amount;
  }

  public getStatus(): string {
    return `${this.title} (${this.author}) : ${this.stock} 冊`
  }
}
