import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pensamento } from 'src/app/components/pensamento/pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      conteudo: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/(.|s)*\S(.|\s)*/)])),
      autoria: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      modelo: new FormControl('modelo1', Validators.required)
    });
  }

  criarPensamento() {
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigateByUrl('/listar-pensamento');
      });
    }
  }

  cancelarPensamento() {
    this.router.navigateByUrl('/listar-pensamento');
  }

  habilitarBotao() {
    return this.formulario.valid ? 'botao' : 'botao__desabilitado';
  }
}
