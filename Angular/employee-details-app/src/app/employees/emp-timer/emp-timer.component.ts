import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-emp-timer',
  templateUrl: './emp-timer.component.html',
  styleUrls: ['./emp-timer.component.css']
})
export class EmpTimerComponent implements OnInit {
  currentTime: string = "";
  constructor(private _notifier: NotifierService) { 
    this._notifier.notifierEvent.subscribe((data: any) => {
      debugger;
      if(data.name == "Timer") {
        this.currentTime = data.time;
      }
    })
  }

  ngOnInit(): void {
  }

}
