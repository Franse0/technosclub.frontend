import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { SliderComponent } from './componentes/pagina-principal/slider/slider.component';
import { HeaderComponent } from './componentes/pagina-principal/header/header.component';
import { NoticiasComponent } from './componentes/pagina-principal/noticias/noticias.component';
import { EventosComponent } from './componentes/pagina-principal/eventos/eventos.component';
import { CatalogoComponent } from './componentes/pagina-principal/catalogo/catalogo.component';
import { ArtistasComponent } from './componentes/pagina-principal/artistas/artistas.component';

const routes: Routes = [
  {path:"patagonia-electri", component:PaginaPrincipalComponent},
  {path:"slider", component:SliderComponent},
  {path:"nav", component:HeaderComponent},
  {path:"noticias", component:NoticiasComponent},
  {path:"eventos",component:EventosComponent },
  {path:"catalogo",component:CatalogoComponent },
  {path:"artistas",component:ArtistasComponent },
  {path:"",redirectTo:'patagonia-electri',pathMatch:'full'},
  {path:"*",  redirectTo:'patagonia-electri', pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
