import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './pages/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './pages/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './pages/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './pages/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-pensamento',
    pathMatch: 'full'
  },
  {
    path: 'criar-pensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listar-pensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'excluir-pensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'editar-pensamento/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
