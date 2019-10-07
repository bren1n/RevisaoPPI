import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {

  constructor() { }

  n1: number;
  n2: number;
  resultado: string;
  nTabuada: number;
  resultadoTabuada: number[] = [];
  ngOnInit() {
  }

  compararSoma(x, y) {
    if (x + y < 100) {
      return this.resultado = 'Esta soma é menor do que 100.';
    } else if (x + y > 100) {
      return this.resultado = 'Esta soma é maior do que 100.';
    } else {
      return this.resultado = 'Esta soma é igual a 100.';
    }
  }

  calcularTabuada(x) {
    for (let i = 0; i <= 10; i++) {
      this.resultadoTabuada.push(x * i);
    }
  }

}
