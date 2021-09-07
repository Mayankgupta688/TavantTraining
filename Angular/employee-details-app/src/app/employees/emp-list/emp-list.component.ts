import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-list-data',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponentEmployees implements OnInit {

  managerName: string = "Mayank Gupta"
  empList: any = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._employeeService.getData().subscribe((response) => {
      this.empList = response;
    })
  }

  deleteEmployee(empId: any) {
    this._employeeService.deleteEmployee(empId).subscribe(() => {
      this.getData();
    })
  }

  addEmployeeParent(empData: any) {
    this._employeeService.addEmployeeParent(empData).subscribe(() => {
      this.getData();
    })
  }

  ngOnDestroy() {
    console.log("Component Destroyed....");
  }
}
