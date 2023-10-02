import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FiestasService } from 'src/app/servicios/fiestas.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit{
  @ViewChild('miBotonUp', { static: true }) miBoton: ElementRef;
  @ViewChild('miBotonDown', { static: true }) miBotonDown: ElementRef;

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
      if(this.inicio==0) {
        const miBotonUp = this.miBoton.nativeElement;
        miBotonUp.classList.add("block-btn")
        return;
      }
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
          const limit:(Number) = data.length ; 
          if(this.fin === limit)   {
            const miBotonDown = this.miBotonDown.nativeElement
            miBotonDown.classList.add("block-btn")
            return;
          }
          else{
          const miBotonUp = this.miBoton.nativeElement;
          miBotonUp.classList.remove("block-btn")
          this.inicio=Number(this.inicio)+1;
          this.fin= Number(this.fin)+1;
          this.fiestasList=data.slice(this.inicio, this.fin);
          console.log(this.fiestasList);

          }
        });
      }
    return 
  }

  showMenos(e:Event){
    if((<HTMLAnchorElement>e.target).classList.contains("fa-caret-up")){
      this.fiestasServise.obtenerDatos().subscribe(data =>{
          if(this.inicio==0) {
            const miBotonUp = this.miBoton.nativeElement;
            miBotonUp.classList.add("block-btn");
          }
          else {
            this.miBotonDown.nativeElement.classList.remove("block-btn");
            this.inicio=Number(this.inicio)-1;
            this.fin= Number(this.fin)-1;        
            this.fiestasList=data.slice(this.inicio, this.fin);
            console.log(this.fiestasList);
          }
        });
      }
    return 
  }
  // Funcion que cuando toquee el boton tome el array desde el index siguiente y copie de ahi en adelante 3 posiciones

}
