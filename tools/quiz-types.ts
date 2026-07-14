// 小テストの正規ソースとなる型定義。
// 各lectureの小テストは docs/exercises/<name>.quiz.ts でこの型に沿って記述する。

export type QuizQuestion = {
  /** 設問文 */
  q: string;
  /** 選択肢（2つ以上）。表示順がそのまま A, B, C, ... に対応する */
  choices: string[];
  /** 正解の選択肢ラベル（"A" | "B" | "C" | ...）。choices の並び順に対応 */
  answer: string;
  /** 配点（省略時は1点） */
  points?: number;
};

export type Quiz = {
  /** フォームのタイトル */
  title: string;
  /** フォームの説明（省略可） */
  description?: string;
  questions: QuizQuestion[];
};
