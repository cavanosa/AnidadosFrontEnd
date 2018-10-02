import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnidadosComponent } from './components/anidados/anidados.component';

// import para los formularios
import { FormsModule } from '@angular/forms';

// import para el cliente http
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AnidadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // formularios y cliebnte http
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
