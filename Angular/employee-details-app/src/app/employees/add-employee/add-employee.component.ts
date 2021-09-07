import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Output() addEmployeeNotifier = new EventEmitter()

  userName: string = "";
  userId: string = "";
  userAvatar: string = "";
  userCreatedAt: string = "";
  constructor() { }

  addEmployeeNotification() {
    debugger;
    this.addEmployeeNotifier.emit({
      name: this.userName,
      createdAt: this.userCreatedAt,
      avatar: this.userAvatar,
      id: this.userId
    })

    this.clearList()
  }

  clearList() {
    this.userName = "";
    this.userId = "";
    this.userAvatar = "";
    this.userCreatedAt = "";
  }

  ngOnInit(): void {
  }

}
