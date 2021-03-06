import { Component, Input, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-emp-count',
  templateUrl: './emp-count.component.html',
  styleUrls: ['./emp-count.component.css']
})
export class EmpCountComponent implements OnInit {
  @Input() empList: any;
  currentTime: string = "";
  constructor(private _notifier: NotifierService) { 
    this._notifier.notifierEvent.subscribe((data: any) => {
      debugger;
      if(data.name == "Counter") {
        this.currentTime = data.time;
      }
    })
  }

  ngOnInit(): void {
  }

}
