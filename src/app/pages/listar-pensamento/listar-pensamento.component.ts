import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/shared/pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listarPagina(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos() {
    this.service.listarPagina(++this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos);
      this.haMaisPensamentos = listaPensamentos.length < this.service.itensPorPagina ? false : true;
    });
  }

  pesquisarPensamentos() {
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.listarPagina(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}