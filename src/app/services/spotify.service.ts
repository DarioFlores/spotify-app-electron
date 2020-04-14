import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  private token = 'BQDv9MJEcRQOKC-hW8GQ01pXe5yEoDt39-PaGREbbxtj8LPReI4-6AK4PXa9YiWoHnGSDuFKjEfEjww8brY'; 
  constructor( private http:HttpClient ) {
    console.log('Servicio Spotify')
  }

  
  public getQuery( query: string){

    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
    
    return this.http.get(url, { headers })

  }

  public getNewReleases() {

    return this.getQuery(`browse/new-releases`)
      .pipe( map( (data: any) =>{
        return data.albums.items;
      }));
  }

  public getArtistas(termino: string) {
    
    return this.getQuery(`search?q=${ termino }&type=artist`)
      .pipe( map( (data: any) =>{
        return data.artists.items
      }) )
      
  }

  public getArtista(id: string) {
    
    return this.getQuery(`artists/${ id }`);
    
  }
  
  public getTopTracks(id: string){
    
    return this.getQuery(`artists/${ id }/top-tracks?country=ar`)
      .pipe( map( (data: any) =>{
        return data.tracks
      }) )

  }
}
