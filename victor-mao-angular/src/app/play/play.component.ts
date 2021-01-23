import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.sass']
})
export class PlayComponent implements OnInit {

  apiLoaded: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: {lat: 32.7, lng: -96.9},
    zoom: 6
  };

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=' + environment.apiKey, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
    
  }

  ngOnInit(): void {
  }

}
