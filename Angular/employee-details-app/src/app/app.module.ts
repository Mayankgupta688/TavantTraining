import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./components/AppComponent/app.component"
import { OtherComponent } from "./components/OtherComponent/other.component";
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { EmpListComponentEmployees } from './employees/emp-list/emp-list.component';
import { FormsModule } from "@angular/forms";
import { SbiStockComponent } from './components/sbi-stock/sbi-stock.component';
import { CreateObservablesComponent } from './components/create-observables/create-observables.component';
import { HttpClientModule } from "@angular/common/http";
import { UsingHttpComponent } from './components/using-http/using-http.component';
import { EmpDetailsComponent } from './employees/emp-details/emp-details.component';
import { EmpCountComponent } from './employees/emp-count/emp-count.component'
@NgModule({
    declarations: [ 
        AppComponent, 
        OtherComponent, 
        EmployeeListComponent, 
        EmpListComponentEmployees, 
        EmpListComponent, 
        SbiStockComponent, 
        CreateObservablesComponent, 
        UsingHttpComponent, EmpDetailsComponent, EmpCountComponent 
    ],
    imports: [ BrowserModule, FormsModule, HttpClientModule ],
    bootstrap: [ EmpListComponentEmployees ]
})
export class AppModule { }


