import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../interface/data';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  constructor(private http: HttpClient) { }

  getListadoCompleto() {
    const path = 'http://dummy.restapiexample.com/api/v1/employees';
    return this.http.get<Data>(path);
  } 

  getListadoUnico(id: string) {
    const path = 'http://dummy.restapiexample.com/api/v1/employee/' + id;
    return this.http.get<Data>(path);
  } 
}
