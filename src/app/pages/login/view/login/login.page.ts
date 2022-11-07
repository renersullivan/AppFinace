import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  atuh: {
    login: 'rener';
    senha: '172018';
  };
  constructor(private httpclient: HttpClient) {}

  ngOnInit() {}

  fazerLogin() {
    this.httpclient.get('http://127.0.0.1:3333/').subscribe=>{}};
  }
}
