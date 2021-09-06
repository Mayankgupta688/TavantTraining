import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {

  constructor() { }
  @Input() employee: any;
  @Output() deleteEmployeeNotifification = new EventEmitter();

  notifyParent(empId: string) {
    debugger;
    this.deleteEmployeeNotifification.emit(empId);
  }

}
