import { Disciplina } from './../disciplina';
import { Aluno } from './aluno';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component implements OnInit {

  constructor() { }

  alunos: Aluno[] = [];
  nome: string;
  nota1: number;
  nota2: number;

  ngOnInit() {

  }

  listarAluno() {
    const aluno = new Aluno();
    aluno.nome = this.nome;
    aluno.nota1 = this.nota1;
    aluno.nota2 = this.nota2;
    aluno.media = (this.nota1 + this.nota2) / 2;
    if (aluno.media >= 60) {
      aluno.aprovado = 'Aprovado';
    } else {
      aluno.aprovado = 'Reprovado';
    }
    return this.alunos.push(aluno);
  }


}
