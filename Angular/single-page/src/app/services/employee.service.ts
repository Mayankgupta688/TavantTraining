import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class EmployeeService {

    constructor(private _http: HttpClient) { }

    empList: any = [];

    getData(): Observable<any> {
        if(this.empList.length > 0) {
            return of(this.empList);
        } else {
            return this._http.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees");
        }
        
    }
}