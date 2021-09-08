import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeeService } from "./employee.service";

@Injectable({
    providedIn: "root"
})
export class DataService {
    constructor(private _http: HttpClient, private _employeeService: EmployeeService, private _router: Router) { }

    resolve() {
        return this._employeeService.getData()
    }

    canActivate() {
    }
}