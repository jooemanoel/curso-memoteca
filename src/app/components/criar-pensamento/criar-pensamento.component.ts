import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  itemForm!: FormGroup;

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      qt: new FormControl(0, Validators.required),
      md: new FormControl('un', Validators.required)
    });
  }

  criarPensamento() {
    console.log('Criado');
  }

  cancelarPensamento() {
    console.log('Cancelado')
  }

}
