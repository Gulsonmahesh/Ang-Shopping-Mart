import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  login: any;
  constructor() { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(this.login.email, [Validators.required, Validators.email]),
      password: new FormControl(this.login.password, [Validators.required, Validators.minLength(6)]),
    });
  }
  onSubmit(event): boolean {
    event.preventDefault();
    console.log(this.loginform);
    return true;
  }
}
