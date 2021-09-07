import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class EmployeeService {

  constructor(private _httpClient: HttpClient) { }
  employees: any[] = [
      {
        "name":"Mayank Gupta",
        "id":"1",
        "avatar":"https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "createdAt":"Today"
      },
      {
        "name":"Anshul Gupta",
        "id":"2",
        "avatar":"https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "createdAt":"Today"
      },
      {
        "name":"Ankit Gupta",
        "id":"3",
        "avatar":"https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "createdAt":"Today"
      },
      {
        "name":"Meha Gupta",
        "id":"4",
        "avatar":"https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "createdAt":"Today"
      },
      {
        "name":"Mayank Gupta",
        "id":"5",
        "avatar":"https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "createdAt":"Today"
      },
      {
        "name":"Mayank Gupta",
        "id":"6",
        "avatar":"https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "createdAt":"Today"
      }
  ]

  getData() {
    return this._httpClient.get("http://localhost:3000/employees");
  }

  deleteEmployee(empId: any) {
    return this._httpClient.delete("http://localhost:3000/employees/" + empId)
  }

  addEmployeeParent(empData: any) {
    return this._httpClient.post("http://localhost:3000/employees", empData)
  }
}