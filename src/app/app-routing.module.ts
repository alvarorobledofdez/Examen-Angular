import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponentComponent } from './components/listado-component/listado-component.component';
import { ConsultaComponentComponent } from './components/consulta-component/consulta-component.component';
import { ToledoComponentComponent } from './components/toledo-component/toledo-component.component';
import { MadridComponentComponent } from './components/madrid-component/madrid-component.component';


const routes: Routes = [{
    path: 'listado',
    component: ListadoComponentComponent
  },
  {
    path: 'consulta',
    component: ConsultaComponentComponent
  },
  {
    path: 'toledo',
    component: ToledoComponentComponent
  },
  {
    path: 'madrid',
    component: MadridComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
