import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {

  empList: any = [];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this._route);
    this._route.data.subscribe((data) => {
      this.empList = data.employees
    })
  }

}
