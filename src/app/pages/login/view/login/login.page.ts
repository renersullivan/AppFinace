import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  auth: string;
  constructor() {}

  ngOnInit() {}

  fazerLogin() {
    let auth = {
      senha: '172018',
      Login: 'rener',
    };
  }
}
