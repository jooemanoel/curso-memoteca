import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pensamento } from 'src/app/components/pensamento/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  itemForm!: FormGroup;

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      conteudo: new FormControl('', Validators.required),
      autoria: new FormControl('', Validators.required),
      modelo: new FormControl('modelo1', Validators.required)
    });
  }

  criarPensamento() {
    this.router.navigateByUrl('/listar-pensamento');
  }

  cancelarPensamento() {
    this.router.navigateByUrl('/listar-pensamento');
  }

}
