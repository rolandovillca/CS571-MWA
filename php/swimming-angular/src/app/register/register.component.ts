import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class Register {
  name!:string;
  username!:string;
  password!:string;

  public fillFromForm = (form: FormGroup | NgForm): boolean => {
      this.name = form.value.name;
      this.username = form.value.username;
      this.password = form.value.password;
      return form.value.password === form.value.repeatPassword;
  }
}
