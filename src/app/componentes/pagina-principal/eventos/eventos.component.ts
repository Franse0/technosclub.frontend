import { Component, OnInit } from '@angular/core';
import { FiestasService } from 'src/app/servicios/fiestas.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit{
  fiestasList:any;
  fiestaInfo:any;
  activate:Boolean=false;
   inicio:Number=0;
   fin:Number=3;

  constructor(private fiestasServise:FiestasService, private sanitizer:DomSanitizer){

  }
  ngOnInit(): void {
    this.fiestasServise.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.fiestasList=data.slice(this.inicio, this.fin)
      console.log(this.fiestasList)
    });
  }



  
  capturarValor(event:Event){
    const valor = (<HTMLImageElement>event.target).id;
    const id:number = Number(valor);
    console.log(id)  
    this.fiestasServise.obtenerFiesta(id).subscribe(data=>{
      console.log("souy la data ", data)
      data.ubicacion = this.sanitizer.bypassSecurityTrustResourceUrl(data.ubicacion)
      console.log("soy la data", data)
      this.fiestaInfo=[data]
    })
  }

  activateAction(){
    this.activate=true;
  }


  showMore(e:Event){
    if((<HTMLAnchorElement>e.target).classList.contains("fa-caret-down")){
        this.fiestasServise.obtenerDatos().subscribe(data =>{
          this.inicio=Number(this.inicio)+1;
          this.fin= Number(this.fin)+1;;
          console.log(data.length)
          const limit:(Number) = data.length ; 
          console.log(limit)
          console.log(this.fin);
          if(this.fin === limit)return;
          this.fiestasList=data.slice(this.inicio, this.fin);
          console.log(this.fiestasList)
        });
      }
    return 
  }
  // Funcion que cuando toquee el boton tome el array desde el index siguiente y copie de ahi en adelante 3 posiciones

}
