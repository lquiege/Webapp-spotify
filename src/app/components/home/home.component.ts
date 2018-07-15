import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones : any[] = [];
  loading : boolean;
  error: boolean;
  mensajeErr: string;
  constructor(private spotify: SpotifyService) {
    this.loading=true;
    this.error=false;
    this.spotify.getNewReleases().subscribe( (data : any) =>{
      this.nuevasCanciones= data;
      this.loading=false;
    }, (err)=>{
      this.error=true;
      this.mensajeErr=err.error.error.message;
    });
   }

  ngOnInit() {
  }



}
