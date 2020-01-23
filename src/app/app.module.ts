import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponentComponent } from './components/consulta-component/consulta-component.component';
import { ListadoComponentComponent } from './components/listado-component/listado-component.component';
import { ToledoComponentComponent } from './components/toledo-component/toledo-component.component';
import { MadridComponentComponent } from './components/madrid-component/madrid-component.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponentComponent,
    ListadoComponentComponent,
    ToledoComponentComponent,
    MadridComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
