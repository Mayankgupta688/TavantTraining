import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./components/AppComponent/app.component"
import { OtherComponent } from "./components/OtherComponent/other.component";
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ 
        AppComponent, 
        OtherComponent, 
        EmployeeListComponent, EmpListComponent 
    ],
    imports: [ BrowserModule, FormsModule ],
    bootstrap: [ EmpListComponent ]
})
export class AppModule { }


