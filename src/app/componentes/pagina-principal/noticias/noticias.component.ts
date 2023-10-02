import { Component, OnInit} from '@angular/core';
import { NoticiasService } from 'src/app/servicios/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent implements OnInit{
noticiasList:any;
noticiasRender:any;

  constructor(private noticiasService:NoticiasService){}

  ngOnInit(): void {
    this.noticiasService.obtenerDatos().subscribe(data=>{
      this.noticiasList=data
      this.noticiasRender=data.slice(0,5)
      console.log(this.noticiasRender)
    })
  }

  renderNoticia(event:Event){
    const valor = (<HTMLElement>event.target).id;
    const id =Number(valor);
    console.log(id)
    this.noticiasService.obtenerNoticia(id).subscribe((data)=>{
      console.log(data)
    })
  }

}
