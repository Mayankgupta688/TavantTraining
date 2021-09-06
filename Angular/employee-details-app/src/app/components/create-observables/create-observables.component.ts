import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-create-observables',
  templateUrl: './create-observables.component.html',
  styleUrls: ['./create-observables.component.css']
})
export class CreateObservablesComponent {
  myObservable: any = null;
  sbiDataObservable: any = null;
  currentTime = "11: 10: 30";
  sbiStockPrice = "";
  constructor() { 
    
    this.myObservable = new Observable((observers) => {
      setInterval(() => {
        observers.next(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`)
      }, 1000)
    })

    this.sbiDataObservable = new Observable((observers) => {
      setInterval(() => {
        fetch("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI")
          .then(data => data.json())
          .then(jsonData => {
              this.sbiStockPrice = `SBI Price is ${jsonData.data.pricecurrent}`
          });
      }, 2000)
    })

    this.myObservable.subscribe((data: string) => {
      this.currentTime = data;
    })

    this.sbiDataObservable.subscribe((data: string) => {
      this.sbiStockPrice = data;
    });

  }

}
