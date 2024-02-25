import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { QuizData } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  fetchData(): Observable<QuizData> {
    return this.http.get<QuizData>('../../assets/api/questions.json');
  }
}
