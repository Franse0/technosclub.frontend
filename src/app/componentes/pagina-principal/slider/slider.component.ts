import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


  constructor(){

  }


  ngOnInit(): void {
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
}
  }
}
