import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LugaresService } from 'src/app/servicios/lugares.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{
  catalogoList:any;

  constructor(private lugaresService:LugaresService, private santilizer:DomSanitizer){}

  ngOnInit(): void {
    this.lugaresService.obtenerDatos().subscribe((data:any[])=>{
      console.log(data)
      data.forEach(item => {
        item.link_ubi= this.santilizer.bypassSecurityTrustResourceUrl(item.link_ubi)
      });
      this.catalogoList=data;

    })
  }


}
