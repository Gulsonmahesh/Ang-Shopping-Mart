import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  email = '';
  password = '';
  ngOnInit(): void {
  }

  login(event): boolean {
    event.preventDefault();
    alert(this.email);
    return true;
  }

}
