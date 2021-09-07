import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent  {

  @Input() userAgeChild: number = 0;
  @Input() userNameChild: string = "";

  constructor() { 
    debugger;
    //alert(this.userAgeChild);
    //alert(this.userNameChild);
  }

  ngOnChanges(change: SimpleChange) {
    alert("Updated....");
  }

  ngOnInit() {
    debugger
    //alert("ngOnInit: " + this.userAgeChild);
    alert("ngOnInit: " + this.userNameChild);
  }

}
