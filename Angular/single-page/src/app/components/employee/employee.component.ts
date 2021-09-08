import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empList: any = [];
  intervalObject: any = null;
  dataObservable: any = null;
  constructor(private _empService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {

    setInterval(() => {
      console.log("Enter Time....")
    }, 1000);

    
    this.dataObservable = this._empService.getData().subscribe((response: any) => {
      this.empList = response;
      this._empService.empList = response;
    })
  }

   ngOnDestroy() {
     clearInterval(this.intervalObject);
     this.dataObservable.unsubscribe();
   }

   navigateEmployee(empId: any) {
    this._router.navigate(["details", empId]);
   }

}
