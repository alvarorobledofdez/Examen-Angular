import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/interface/empleados';
import { RutasService } from 'src/app/services/rutas.service';
import { Data } from 'src/app/interface/data';

@Component({
  selector: 'app-consulta-component',
  templateUrl: './consulta-component.component.html',
  styleUrls: ['./consulta-component.component.css']
})
export class ConsultaComponentComponent implements OnInit {

  empleadoArray: Empleados = { id: '', employee_name: '', employee_age: '', employee_salary: '', profile_image: '' };
  idempleado: string = '';
  data: Data;
  empleados = null;
  sueldo: number;

  constructor(private rt: RutasService) { }

  ngOnInit() {
  }

  verListadoUnico(id:number, ipc: number) {
    this.rt.getListadoCompleto().subscribe(unempleado => {
      this.data = unempleado
      this.empleados = this.data.data
      this.empleadoArray = this.empleados[id - 1]
      this.sueldo = parseInt(this.empleadoArray.employee_salary) * ipc;
      
    });
  }

} 
