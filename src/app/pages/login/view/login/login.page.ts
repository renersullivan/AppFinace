import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}
  fazerLogin() {
    // alert('clicou no btn');
    const auth = {
      login: 'rener',
      senha: '172018',
    };
    console.log(auth);
    this.httpClient
      .post<any>('http://127.0.0.1:3333/', auth)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
