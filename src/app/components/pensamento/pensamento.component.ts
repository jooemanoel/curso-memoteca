import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../../shared/pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = { conteudo: '', autoria: '', modelo: 'modelo1', favorito: false };

  constructor(private service: PensamentoService) { }

  ngOnInit(): void { }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g';
    }
    else {
      return 'pensamento-p';
    }
  }

  mudarIconeFavorito(): string {
    return this.pensamento.favorito ? 'Sim' : 'Não';
  }

  alterarFavorito() {
    this.pensamento.favorito = !this.pensamento.favorito;
    this.service.editar(this.pensamento).subscribe();
  }
}
