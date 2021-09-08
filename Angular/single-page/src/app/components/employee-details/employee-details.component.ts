import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _http: HttpClient) { }

  ngOnInit(): void {
    alert("Get Details for Employee with Id: " + this._route.snapshot.params.empId);
    this._http.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees/" + this._route.snapshot.params.empId).subscribe((response) => {
      var data = response;
    })
  }

}
