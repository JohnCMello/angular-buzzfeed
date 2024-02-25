import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { QuizPageComponent } from './pages/quiz/quiz.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'quiz',
    component: QuizPageComponent,
  },
];
