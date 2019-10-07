import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component implements AfterViewInit {

  constructor() { }

  user: string;
  password: string;
  numerosPares: number[] = [];
  resultado: string;

  ngAfterViewInit() {
    this.imprimirPares();
  }

  validarCredenciais(u, p) {
    if (u !== '20161144010030' && p !== '1234') {
      alert('Suas credenciais são inválidas.');
    } else {
      alert('Suas credenciais são válidas.')
    }
  }

  imprimirPares() {
    for (let i = 0; i <= 20; i++) {
      if (i % 2 === 0) {
        this.numerosPares.push(i);
      }
    }
    return this.resultado = this.numerosPares.toString();
  }
}
