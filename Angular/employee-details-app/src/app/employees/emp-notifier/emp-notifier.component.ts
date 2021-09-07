import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-emp-notifier',
  templateUrl: './emp-notifier.component.html',
  styleUrls: ['./emp-notifier.component.css']
})
export class EmpNotifierComponent implements OnInit {

  constructor(private _notifier: NotifierService) { }

  invokeCounterEvent() {
    debugger;
    var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    this._notifier.notifierEvent.emit({
      time: currentTime,
      name: "Counter"
    });
  }

  invokeTimerEvent() {
    debugger;
    var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    this._notifier.notifierEvent.emit({
      time: currentTime,
      name: "Timer"
    });
  }

  ngOnInit(): void {
  }

}
