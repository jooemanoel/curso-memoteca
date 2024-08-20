import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { PensamentoComponent } from './components/pensamento/pensamento.component';
import { CriarPensamentoComponent } from './pages/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './pages/listar-pensamento/listar-pensamento.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPensamentoComponent } from './pages/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './pages/editar-pensamento/editar-pensamento.component';
import { BotaoCarregarMaisComponent } from './components/botao-carregar-mais/botao-carregar-mais.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent,
    BotaoCarregarMaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
