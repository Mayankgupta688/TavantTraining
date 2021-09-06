import { Component } from '@angular/core';

@Component({
  selector: 'app-sbi-stock',
  templateUrl: './sbi-stock.component.html',
  styleUrls: ['./sbi-stock.component.css']
})
export class SbiStockComponent {
  sbiStockPrice = "430";
  position = 0
  constructor() {
    setInterval(() => {
      fetch("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI")
        .then(data => data.json())
        .then(jsonData => {
            this.sbiStockPrice = `SBI Price is ${jsonData.data.pricecurrent}`
        });
    }, 2000)


    setInterval(() => {
      this.position = this.position + 1;
    }, 200)
    
   }

}
