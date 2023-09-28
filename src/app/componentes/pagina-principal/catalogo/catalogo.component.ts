import { Component, OnInit } from '@angular/core';
import { LugaresService } from 'src/app/servicios/lugares.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{
  catalogoList:any;

  constructor(private lugaresService:LugaresService){}

  ngOnInit(): void {
    this.lugaresService.obtenerDatos().subscribe(data=>{
      // console.log(data)
      this.catalogoList=data;
    })
  }


}
