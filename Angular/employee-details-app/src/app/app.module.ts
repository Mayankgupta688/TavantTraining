import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./components/AppComponent/app.component"
import { OtherComponent } from "./components/OtherComponent/other.component";
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
    declarations: [ 
        AppComponent, 
        OtherComponent, 
        EmployeeListComponent 
    ],
    imports: [ BrowserModule ],
    bootstrap: [ EmployeeListComponent ]
})
export class AppModule { }


