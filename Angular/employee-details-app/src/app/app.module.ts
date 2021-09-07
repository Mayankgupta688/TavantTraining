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
import { EmpCountComponent } from './employees/emp-count/emp-count.component';
import { EmpNotifierComponent } from './employees/emp-notifier/emp-notifier.component';
import { EmpTimerComponent } from './employees/emp-timer/emp-timer.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { ParentComponentComponent } from './lifecycle/parent-component/parent-component.component';
import { ChildComponentComponent } from './lifecycle/child-component/child-component.component';
import { CurrencyPipeComponent } from './lifecycle/currency-pipe/currency-pipe.component'
import { TransformPipes } from "./pipes/transform.pipe";
import { DelayDirective } from "./directives/delay.directive";
import { ColorDirective } from "./directives/color.directive";
@NgModule({
    declarations: [ 
        AppComponent, 
        OtherComponent, 
        EmployeeListComponent, 
        EmpListComponentEmployees, 
        EmpListComponent, 
        SbiStockComponent, 
        CreateObservablesComponent, 
        UsingHttpComponent, 
        EmpDetailsComponent, 
        EmpCountComponent, 
        EmpNotifierComponent, 
        EmpTimerComponent, 
        AddEmployeeComponent, 
        ParentComponentComponent, 
        ChildComponentComponent, 
        CurrencyPipeComponent,
        TransformPipes,
        DelayDirective,
        ColorDirective
    ],
    imports: [ BrowserModule, FormsModule, HttpClientModule ],
    bootstrap: [ EmpListComponentEmployees ]
})
export class AppModule { }


