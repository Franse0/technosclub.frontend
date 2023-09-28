import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Artista } from 'src/app/modelos/artista';
import { ArtistasService } from 'src/app/servicios/artistas.service';

@Component({
  selector: 'app-lista-artistas',
  templateUrl: './lista-artistas.component.html',
  styleUrls: ['./lista-artistas.component.css']
})
export class ListaArtistasComponent implements OnInit{
  artistas:any;
  artistaId:any;
  @Output() emitirArtista:EventEmitter<any> = new EventEmitter();

  constructor(private artistasService:ArtistasService){}

  ngOnInit(): void {
    this.artistasService.obtenerDatos().subscribe(data=>{
      // console.log(data)
      this.artistas= data;
    })
  }

  
  
  capturarValor(event:Event){
    const valor = (<HTMLImageElement>event.target).id;
    const id:number = Number(valor);
    console.log(id)
    this.renderFiesta(id);
  }

  renderFiesta(id:Number):void{
    this.artistaId=id;
    this.emitirArtista.emit(this.artistaId);
  }


}
