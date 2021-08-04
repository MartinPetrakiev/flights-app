import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  email: string;
  password: string;
  
  constructor() {
    this.email = '';
    this.password = '';
   }

  ngOnInit(): void {
  }

}
