import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

  public employeeAddForm = new FormGroup({
    userName: new FormControl("Mayank Gupta", [Validators.required]),
    userId: new FormControl("101", [Validators.required, Validators.min(0), Validators.max(1000)]),
    userAvatar: new FormControl("None...", [Validators.required]),
    userCreatedAt: new FormControl("Today...", [Validators.required]),
  })

  ngOnInit() {
    this.employeeAddForm.valueChanges.subscribe((data) => {
      alert("Some Value Updated...")
    })

    this.employeeAddForm.controls.userName.valueChanges.subscribe((data) => {
      alert("Usere Name Value Updated...")
    })

    this.employeeAddForm.controls.userId.valueChanges.subscribe((data) => {
      alert("Usere Id Value Updated...")
    })

    this.employeeAddForm.controls.userCreatedAt.valueChanges.subscribe((data) => {
      alert("Usere Name Value Updated...")
    })

    this.employeeAddForm.controls.userAvatar.valueChanges.subscribe((data) => {
      alert("Usere Name Value Updated...")
    })
  }

  submitData() {
    debugger;
  }

}
