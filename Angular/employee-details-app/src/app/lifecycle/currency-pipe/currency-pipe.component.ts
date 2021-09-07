import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  templateUrl: './currency-pipe.component.html',
  styleUrls: ['./currency-pipe.component.css']
})
export class CurrencyPipeComponent implements OnInit {

  constructor() { }
  userName: string = "May      ,,,,,   @@@@@  ank";
  userSalary: number = 1000.28165612835128351235183561253681253;
  
  ngOnInit(): void {
  }

}
