import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search/search.component';
import { ArtistaComponent } from './artista/artista.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NoimagenPipe } from './pipes/noimagen.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { LoadingComponent } from './loading/loading.component';
import { SpotifyService } from '../services/spotify.service';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NoimagenPipe,
    DomseguroPipe,
    TarjetaComponent,
    LoadingComponent
  ],
  providers: [],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
