import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.css']
})
export class Exercicio5Component implements OnInit {

  constructor() { }

  n1: number;
  n2: number;
  soma: number;
  subtracao: number;
  multiplicacao: number;
  divisao: number;

  ngOnInit() {
  }

  validarNumeros(x, y) {
    if (!(x && y)) {
      alert('Preencha todas as entradas.');
    } else {
      this.somar(x, y);
      this.subtrair(x, y);
      this.dividir(x, y);
      this.multiplicar(x, y);
    }
  }

  somar(x, y) {
    return this.soma = x + y;
  }

  subtrair(x, y) {
    return this.subtracao = x - y;
  }

  dividir(x, y) {
    return this.divisao = x / y;
  }

  multiplicar(x, y) {
    return this.multiplicacao = x * y;
  }
}
