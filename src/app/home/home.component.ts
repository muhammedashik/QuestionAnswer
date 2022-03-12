import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transfereData } from '../models/transfereData';
import {  HomeService } from './service/home.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  model:transfereData={}
  constructor( private router:Router,private transfereService: HomeService) { }

  ngOnInit(): void {
  }
submit(){
  this.transfereService.homeData = this.model
  this.router.navigateByUrl(`/question-answer`);
  
}
}
