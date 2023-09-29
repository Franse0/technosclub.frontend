import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class FiestasService {
  url:String="http://localhost:8080/";
  
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"fiestas")
  }
  obtenerFiesta(id:number):Observable<any>{
   return  this.http.get(this.url+"fiesta/"+id)
    
  }
}