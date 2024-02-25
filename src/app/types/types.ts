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

export interface QuizData {
  title: string;
  subtitle: string;
  content: {
    id: number;
    text: string;
    questions: Question[];
  }[];
  answers: Answer[];
}
