import { Produto } from './produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  templateUrl: './exercicio6.component.html',
  styleUrls: ['./exercicio6.component.css']
})
export class Exercicio6Component implements OnInit {

  constructor() { }

  produtos: Produto[] = [];
  nome: string;
  quantidade: number;
  preco: number;
  id = -1;

  ngOnInit() {
  }

  cadastrarProduto() {
    const produto = new Produto();
    produto.nome = this.nome;
    produto.quantidade = this.quantidade;
    produto.preco = this.preco;
    if (this.id === -1) {
      this.produtos.push(produto);
    } else {
      this.produtos[this.id] = {nome: this.nome, quantidade: this.quantidade, preco: this.preco};
      this.id = -1;
    }
    console.log(this.produtos);
  }

  apagarProduto(produto: Produto) {
    const index = this.produtos.indexOf(produto);
    return this.produtos.splice(index, 1);
  }

  editarProduto(produto: Produto) {
    this.nome = produto.nome;
    this.quantidade = produto.quantidade;
    this.preco = produto.preco;
    this.id = this.produtos.indexOf(produto);
  }
}
