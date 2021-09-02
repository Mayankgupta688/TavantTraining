import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  public companyName: string = "Tavant";
  public counter: number = 0;
  public userName: string = "Anshul Gupta";


  constructor() {
    setInterval(() => {
      this.counter = this.counter + 1;
    }, 1000)
  }

  updateCompany() {
    this.companyName = "TechnoFunnel";
  }

  updateUserName() {
    this.userName = "Mayank Gupta";
  }

  getUserName() {
    return this.userName;
  }
}
