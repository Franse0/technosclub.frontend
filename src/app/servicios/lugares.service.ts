import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  url:String="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"lugares");
  }

  obtenerLugar(id:Number){
    return this.http.get(this.url+"lugares"+id)
  }
}