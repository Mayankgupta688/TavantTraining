import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list-data',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponentEmployees implements OnInit {

  managerName: string = "Mayank Gupta"
  empList: any = [];
  constructor(private _httpClient: HttpClient) { 
    this._httpClient.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").subscribe((response) => {
      this.empList = response;
    })
  }


  deleteEmployee(empId: any) {
    debugger;
    this.empList = this.empList.filter((emp: any) => {
      return emp.id !== empId
    })
  }

  ngOnInit(): void {
  }

}
