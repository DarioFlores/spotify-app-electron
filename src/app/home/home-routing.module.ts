import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { ArtistaComponent } from './artista/artista.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistaComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
