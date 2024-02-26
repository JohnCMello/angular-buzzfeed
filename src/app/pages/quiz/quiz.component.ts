import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { Answer, Content, Question, QuizData } from '../../types/types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizPageComponent implements OnInit {
  title: string = '';
  subtitle: string = '';
  answers: Answer[] | undefined;
  content: Content[] | undefined;
  questionIndex: number = 0;
  totalOfQuestions: number = 0;
  isGameFinished: boolean = false;
  selectedQuestion: Content | undefined;
  selectedOptions: string[] = [];
  finalAnswer: Answer | undefined;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questionsService.fetchData().subscribe((data) => {
      this.initializeGameData(data);
    });
  }

  initializeGameData(data: any): void {
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.answers = data.answers;
    this.content = data.content;
    this.selectedQuestion = data.content[this.questionIndex];
    this.totalOfQuestions = data.content.length;
  }
  selectOption(value: string) {
    this.selectedOptions.push(value);
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.questionIndex === this.totalOfQuestions - 1) {
      this.isGameFinished = true;
      this.setFinalAnswer(this.selectedOptions);
    }
    this.questionIndex += 1;
    this.selectedQuestion = this.content
      ? this.content[this.questionIndex]
      : undefined;
  }

  setFinalAnswer(combination: string[]) {
    this.finalAnswer = this.answers?.find(
      (answer) => answer.combination.toString() === combination.toString()
    );
  }

  trackById(index: number, item: any): any {
    return item.id;
  }

  get getSelectedQuestion() {
    return this.selectedQuestion?.questions;
  }

  get getGameIsFinished() {
    return this.isGameFinished;
  }
}
