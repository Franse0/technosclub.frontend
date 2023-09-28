import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {
  url:String="http://localhost:8080/";


  constructor(private http:HttpClient) { }


  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"artistas")
  }
  obtenerArtista(id:Number){
    return this.http.get(this.url+"artista/"+id)
  }
}
