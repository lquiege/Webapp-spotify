import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  loading: boolean;
  artist: any = {};
  tt: any[]= [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
      this.router.params.subscribe(params => {
        this.loading=true;
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
      });
  }


  ngOnInit() {
  }

  getArtista(id: string){
      this.spotify.getArtista(id).subscribe ( artist => {
        console.log(artist);
        this.artist=artist;
        this.loading=false;
      });
  }

    getTopTracks(id: string) {
      this.spotify.getTopTracks(id).subscribe(topt=>{
        console.log(topt);
        this.tt=topt;
      });
    }

}
