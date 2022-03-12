import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';
import { questionAnswerModel } from '../../models/questionansweMode';
@Injectable({
  providedIn: 'root'
})
export class QuestionAnswerService {

  constructor(private http:HttpClient) { }

  public getQuestionAnswerData():Observable<questionAnswerModel>{
    return this.http.get('assets/questionandanswer.json');
  }
}
