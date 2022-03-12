import { Component, OnInit } from '@angular/core';
import { QuestionAnswerService } from './service/question-answer.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { HomeService } from '../home/service/home.service';
@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {

  modalRef: any = BsModalRef;
  model: any = {

  }
  constructor(private httpService: QuestionAnswerService, private modalService: BsModalService, private transfereService: HomeService, private router: Router) { }
  question_Details: any = [];
  data: any = [];
  answer_Counter: number = 0;
  incorrecute_Counter: number = 0;
  incomplete_test : boolean = false;
  ngOnInit(): void {
    this.httpService.getQuestionAnswerData().subscribe(data => {
      this.question_Details = data;
    })
    this.data = this.transfereService.homeData;
  }
  fieldCheck(data: any, value: string) {
    if (data.answer === value || value === 'yes') {
      this.answer_Counter += +1;
    } else {
      this.incorrecute_Counter += +1;
    }
  }
  fieldCheckBox(event: any, check: boolean, id: number) {
    console.log(event.target.checked, check)
    if (this.model.answer_checkBox_1 === true && id === 1) {
      console.log('here f1', this.model.answer_checkBox_1);
      this.incorrecute_Counter += +1;
     
      this.model.answer_checkBox_2 = false;
    }
    if (this.model.answer_checkBox_2 === true && id === 2) {
      console.log('here f2', this.model.answer_checkBox_2)
      this.answer_Counter += +1;
      this.model.answer_checkBox_1 = false;
    }

  }
  submit(template: any){
    if (this.model.answer_1 == '' || this.model.answer_1 == undefined || this.model.answer_3 == '' || this.model.answer_3 == undefined) {
      return this.incomplete_test = true;
      //  window.alert('Please Enter the All Answers');
    } else if (this.model.answer_checkBox_1 == null || this.model.answer_checkBox_1 == undefined || this.model.answer_checkBox_2 == null || this.model.answer_checkBox_2 == undefined) {
      return this.incomplete_test = true;
      //  window.alert('Please Enter the All Answers');
    } else {
      this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg modal-xl', ignoreBackdropClick: true }));
    }
    return this.incomplete_test = false;
  }
  cancel() {
    this.router.navigateByUrl(`/home`);
  }
  close() {
    this.modalRef.hide();
    this.model = {};
    this.answer_Counter = 0;
    this.incorrecute_Counter = 0;
  }
}
