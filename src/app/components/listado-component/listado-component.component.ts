import { Component, OnInit } from '@angular/core';
import { RutasService } from 'src/app/services/rutas.service';
import { Data } from 'src/app/interface/data';

@Component({
  selector: 'app-listado-component',
  templateUrl: './listado-component.component.html',
  styleUrls: ['./listado-component.component.css']
})
export class ListadoComponentComponent implements OnInit {

  data: Data;
  empleados = null;


  constructor(private rt: RutasService) {

  }

  ngOnInit() {
    this.verListadoCompleto();
  }

  verListadoCompleto() {
    this.rt.getListadoCompleto().subscribe(data => {
      this.data = data
      this.empleados = this.data.data
    });
  }

 

}
