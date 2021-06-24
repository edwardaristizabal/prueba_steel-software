import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearBibliotecaComponent } from './components/crear-biblioteca/crear-biblioteca.component';
import { ListarBibliotecaComponent } from './components/listar-biblioteca/listar-biblioteca.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearBibliotecaComponent,
    ListarBibliotecaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
