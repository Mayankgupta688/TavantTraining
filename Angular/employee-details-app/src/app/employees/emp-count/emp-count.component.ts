import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-count',
  templateUrl: './emp-count.component.html',
  styleUrls: ['./emp-count.component.css']
})
export class EmpCountComponent implements OnInit {
  @Input() empList: any;
  constructor() { }

  ngOnInit(): void {
  }

}
