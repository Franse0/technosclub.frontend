import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FiestasService } from 'src/app/servicios/fiestas.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {
fiesta:any;

  constructor(private fiestaService:FiestasService){
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
    this.initializeSlider()
      
    }, 1000);
  }

  ngOnInit(): void {

    this.fiestaService.obtenerDatos().subscribe(data =>{
      this.fiesta = data.slice(0,3)
      if (this.fiesta.length > 0){
        this.fiesta.push(this.fiesta[0]);
      }
      console.log(this.fiesta)
    })
  }


  initializeSlider(): void {
    let slider:any = document.querySelector('.slider-contenedor');
    let sliderIndividual = document.querySelectorAll('.contenido-slider');
    let contador = 1;
    let width = sliderIndividual[0].clientWidth;
    let intervalo = 8000;
  
    window.addEventListener('resize', ()=>{ 
        width = sliderIndividual[0].clientWidth; 
  
      });
  
    setInterval(()=>{
      sliders();
    },intervalo);
  
  
  function sliders (){
      slider.style.transform = "translate("+(-width*contador)+"px";
      slider.style.transition = "transform .7s";
      contador++;
  
      if(contador==sliderIndividual.length){
          setTimeout(function(){
              slider.style.transform = "translate(0px)";
              slider.style.transition = "transform 0s";
              contador=1;
          },1500)
      } 
  }  }



}
