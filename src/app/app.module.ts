import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { QuestionAnswerService } from './question-answer/service/question-answer.service';
import { HttpClientModule } from '@angular/common/http';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    QuestionAnswerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
    FormsModule
  ],
  providers: [QuestionAnswerService,BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
