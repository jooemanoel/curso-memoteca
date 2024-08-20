import { Component } from '@angular/core';
import { Pensamento } from 'src/app/components/pensamento/pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [
    {
      conteudo: 'rtu',
      autoria: 'ghk',
      modelo: 'modelo3'
    },
    {
      conteudo: 'qwer',
      autoria: 'asdf',
      modelo: 'modelo2'
    },
    {
      conteudo: '1234',
      autoria: '5678',
      modelo: 'modelo1'
    }
  ];
}
