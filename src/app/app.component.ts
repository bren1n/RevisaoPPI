import { Disciplina } from './disciplina';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'RevisaoAngular';

  celsius: any;
  fahrenheit: number;
  disciplinas: Disciplina[] = [];

  ngAfterViewInit() {
    this.listagemDisciplinas();
  }

  converteCelsius(valor: number) {
    return this.celsius = (((valor - 32) * 5) / 9).toFixed(2);
  }

  listagemDisciplinas() {
    for (let i = 1; i <= 5; i++) {
      const disciplina = new Disciplina();
      disciplina.nome = 'Disciplina' + i;
      disciplina.ch = 100 + (10 * i);
      this.disciplinas.push(disciplina);
    }
  }
}
