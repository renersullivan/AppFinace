import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transference',
  templateUrl: './transference.page.html',
  styleUrls: ['./transference.page.scss'],
})
export class TransferencePage implements OnInit {
  numero = '';

  constructor() {}

  ngOnInit() {}

  insert(num) {
    this.numero = this.numero + num;
    this.verificarSeExisteZeroRepetido();
  }

  verificarSeExisteZeroRepetido() {
    if (
      this.numero.substring(0, 1) === '0' &&
      this.numero.substring(1, 2) === '0'
    ) {
      console.log('Voce é troxa?');
      this.numero = '0';
      return;
    }
  }

  apagar() {
    if (this.numero === '') {
      return;
    }

    this.numero = this.numero.substring(0, this.numero.length - 1);
    console.log(this.numero);
  }
}
