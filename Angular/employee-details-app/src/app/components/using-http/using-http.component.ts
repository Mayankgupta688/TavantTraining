import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-http',
  templateUrl: './using-http.component.html',
  styleUrls: ['./using-http.component.css']
})
export class UsingHttpComponent {
  sbiStockInfo: string = "";
  constructor(private _httpClient: HttpClient) { 
    setInterval(() => {
      var mySubscription = this._httpClient.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI")
      
      mySubscription.subscribe((response: any) => {
       console.log(response.data.pricecurrent);
      })
      
      mySubscription.subscribe((response: any) => {
        this.sbiStockInfo = response.data.pricecurrent;
      })

      
    }, 1000)
  }
}
