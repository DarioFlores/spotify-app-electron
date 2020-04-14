import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public nuevasCanciones;
  public loading:boolean;

  constructor( private spotifyService:SpotifyService) { 
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe( (data:any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }

  ngOnInit(): void { }

}
