import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Artista } from 'src/app/modelos/artista';
import { ArtistasService } from 'src/app/servicios/artistas.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent  implements OnInit{

  artistaCard:any;

  constructor(private artistaService:ArtistasService){}
  ngOnInit(): void {

  }


  getArtista(id:Number):void{
    this.artistaService.obtenerArtista(id).subscribe(data=>{
      console.log(data)
      this.artistaCard=data
    })
  }


  cerrar(e:Event){
    if(!(<HTMLImageElement>e.target).classList.contains("card-artista-activate") ||!(<HTMLImageElement>e.target).classList.contains("info-card-artista")||!(<HTMLImageElement>e.target).classList.contains("card-artista")){
      this.artistaCard="";
    }
  }


}
