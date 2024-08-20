import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../components/pensamento/pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento!: Pensamento;

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscar(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigateByUrl('/listar-pensamento');
      });
    }
  }
  cancelar() {
    this.router.navigateByUrl('/listar-pensamento');
  }
}
