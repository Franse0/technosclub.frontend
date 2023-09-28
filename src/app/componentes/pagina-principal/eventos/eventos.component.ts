import { Component, OnInit } from '@angular/core';
import { FiestasService } from 'src/app/servicios/fiestas.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit{
  fiestasList:any;
  fiestaInfo:any;
  activate:Boolean=false;

  constructor(private fiestasServise:FiestasService){

  }
  ngOnInit(): void {
    this.fiestasServise.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.fiestasList=data;
      this.fiestaInfo=data;



    });
  }



  
  capturarValor(event:Event){
    const valor = (<HTMLImageElement>event.target).id;
    const id:number = Number(valor);
    console.log(id)
    
    this.fiestasServise.obtenerFiesta(id).subscribe(data=>{
      console.log("souy la data ", data)
      this.fiestasList=[data]
    })
  }

  activateAction(){
    this.activate=true;
  }


  // Funcion que cuando toquee el boton tome el array desde el index siguiente y copie de ahi en adelante 3 posiciones

}
