import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/pagina-principal/header/header.component';
import { SliderComponent } from './componentes/pagina-principal/slider/slider.component';
import { NoticiasComponent } from './componentes/pagina-principal/noticias/noticias.component';
import { EventosComponent } from './componentes/pagina-principal/eventos/eventos.component';
import { FooterComponent } from './componentes/pagina-principal/footer/footer.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { HttpClientModule} from '@angular/common/http';
import { CatalogoComponent } from './componentes/pagina-principal/catalogo/catalogo.component';
import { ArtistasComponent } from './componentes/pagina-principal/artistas/artistas.component';
import { ListaArtistasComponent } from './componentes/pagina-principal/lista-artistas/lista-artistas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    NoticiasComponent,
    EventosComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    CatalogoComponent,
    ArtistasComponent,
    ListaArtistasComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  exports:[ ArtistasComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {




 }

