import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { Answer, Question, QuizData } from '../../types/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizPageComponent implements OnInit {
  title: string = '';
  subtitle: string = '';
  answers: Answer[] | undefined;
  content:
    | {
        id: number;
        text: string;
        questions: Question[];
      }[]
    | undefined;

  questionIndex: number = 0;
  totalOfQuestions: number = 0;
  isGameFinished: boolean = false;
  selectedOptions: string[] = [];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questionsService.fetchData().subscribe((data) => {
      this.title = data.title;
      this.subtitle = data.subtitle;
      this.answers = data.answers;
      this.content = data.content;
      this.totalOfQuestions = data.content.length;
      console.log(data);
    });
  }

  selectOption() {
    // adiciona o valor do text da option ao array selectedOptions
    //  soma +1 ao questionIndex
  }

  get getContent() {
    return this.content;
  }

  trackById(index: number, item: any): any {
    return item.id;
  }
}
