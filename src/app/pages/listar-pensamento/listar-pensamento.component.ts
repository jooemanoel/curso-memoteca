import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/shared/pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  listaFavoritos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  abaFavoritos: boolean = false;

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inicializarPensamentos();
  }

  inicializarPensamentos() {
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.listarPagina(this.paginaAtual, this.filtro, this.abaFavoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
      if (this.abaFavoritos) {
        this.listaFavoritos = listaPensamentos;
      }
    });
  }

  carregarMaisPensamentos() {
    this.service.listarPagina(++this.paginaAtual, this.filtro, this.abaFavoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos);
      if (this.abaFavoritos) {
        this.listaFavoritos.push(...listaPensamentos);
      }
      this.haMaisPensamentos = listaPensamentos.length < this.service.itensPorPagina ? false : true;
    });
  }

  pesquisarPensamentos() {
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.listarPagina(this.paginaAtual, this.filtro, this.abaFavoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
      if (this.abaFavoritos) {
        this.listaFavoritos = listaPensamentos;
      }
    });
  }

  listarFavoritos() {
    this.abaFavoritos = true;
    this.inicializarPensamentos();
  }

  listarMural() {
    this.abaFavoritos = false;
    this.inicializarPensamentos();
  }
}