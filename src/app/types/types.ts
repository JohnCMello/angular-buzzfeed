export interface Question {
  text: string;
  image: string;
  alt: string;
  credit: string;
}

export interface Answer {
  combination: string[];
  text: string;
  image: string;
  alt: string;
}

export interface Content {
  id: number;
  text: string;
  questions: Question[];
}

export interface QuizData {
  title: string;
  subtitle: string;
  content: Content[];
  answers: Answer[];
}
