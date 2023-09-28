import { Component, OnInit} from '@angular/core';
import { NoticiasService } from 'src/app/servicios/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent implements OnInit{
noticiasList:any;

  constructor(private noticiasService:NoticiasService){}

  ngOnInit(): void {
    this.noticiasService.obtenerDatos().subscribe(data=>{
      this.noticiasList=data
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
