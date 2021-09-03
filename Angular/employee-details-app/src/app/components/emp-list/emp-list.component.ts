
import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

interface IEmployee {
  name: string;
  id: string;
  avatar: string;
  createdAt: string;
}

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent{

  empDetailsList: any = [];
  empMasterList: any = [];

  textValue= "";

  getValue() {
    debugger;
    alert(this.textValue);
  }

  constructor(public _dataService: EmployeeService) {
    debugger;
    this.empDetailsList = this._dataService.employees;
    this.empMasterList = this._dataService.employees;
  }

  deleteEmployee(clickEvent: any) { 
    alert(`Employee to be Deleted is having Id ${clickEvent.target.id}`);
  }

  deleteEmployeeValue(empId: string) { 
    alert(`Employee to be Deleted is having Id ${empId}`);
  }

  filterEmployeeList(filterText: any, other: any) {
    this.empDetailsList = this.empMasterList.filter((emp: any) => {
      return emp.name.indexOf(filterText) > -1;
    })
  }

  filterOnKeyUp(event: any) {

    debugger;
    this.empDetailsList = this.empMasterList.filter((emp: any) => {
      return emp.name.indexOf(event.target.value) > -1;
    });

    this.textValue = event.target.value;
  }

  filterOnKeyUpModul(val: string) {
    this.empDetailsList = this.empMasterList.filter((emp: any) => {
      return emp.name.indexOf(val) > -1;
    });
  }

  filterOnKeyUpText(event: any) {
    debugger;
    this.empDetailsList = this.empMasterList.filter((emp: any) => {
      return emp.name.indexOf(event.target.value) > -1;
    })
  }

}
