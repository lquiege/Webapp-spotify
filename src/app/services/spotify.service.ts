import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery( query : string){
      const direccion=`https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({'Authorization': 'Bearer BQA1Bkkwtesxnpojx0r3KrJ2_XCzy7JshfJfpq6hUIv8JJ6DUxM3XxfTVfrNXR3qnewe7lHGIw_60FDntFA'});

        return this.http.get(direccion, {headers});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases').pipe( map( data/*:any*/ => data['albums'].items));
    //    return data['albums'].items
    //  }));

  }

  getArtistas(termino: string) {

      return this.getQuery(`search?q=${termino}&type=artist`).pipe( map( data/*:any*/ =>{
        return data['artists'].items
        }));
      }

  getArtista(id: string) {

          return this.getQuery(`artists/${id}`);//.pipe( map( data/*:any*/ =>{
      //      return data['artists'].items
      //      }));
          }

  getTopTracks(id: string) {

                  return this.getQuery(`artists/${id}/top-tracks?country=es`).pipe( map( data/*:any*/ =>{
                    return data['tracks'];
                    }));
                  }
    }
