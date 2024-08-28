import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'src/app/shared/pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscar(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigateByUrl('/listar-pensamento');
    });
  }

  cancelarPensamento() {
    this.router.navigateByUrl('/listar-pensamento');
  }

}
