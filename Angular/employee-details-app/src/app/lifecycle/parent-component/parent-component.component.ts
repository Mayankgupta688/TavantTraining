import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  userName: string = "TechnoFunnel";
  userAge: number = 33;

  updateData() {
    this.userAge = 40;
    this.userName = "Mayank";
  }

  updateUserAlet() {
    alert("Input Updated...");
    this.userAge = 100
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
