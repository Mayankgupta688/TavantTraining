import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SalariesComponent } from './components/salaries/salaries.component';
import { AttendenceComponent } from './components/attendence/attendence.component';
import { HelpComponent } from './components/help/help.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { DataService } from './services/data.service';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    EmployeeComponent,
    SalariesComponent,
    AttendenceComponent,
    HelpComponent,
    AboutComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: "employee",
      component: EmployeeComponent,
      
    }, {
      path: "attendence",
      component: AttendenceComponent,
      resolve: {
        employees: DataService
      }
    }, {
      path: "salaries",
      component: SalariesComponent
    }, {
      path: "about",
      component: AboutComponent
    }, {
      path: "help",
      component: HelpComponent
    }, {
      path: "details/:empId",
      component: EmployeeDetailsComponent
    }, {
      path: "addemployee",
      component: AddEmployeeComponent
    }, {
      path: "**",
      component: EmployeeComponent
    }])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
