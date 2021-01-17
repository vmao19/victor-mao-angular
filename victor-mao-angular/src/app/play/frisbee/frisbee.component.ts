import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-frisbee',
  templateUrl: './frisbee.component.html',
  styleUrls: ['./frisbee.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FrisbeeComponent implements AfterViewInit {
  columnsToDisplay: string[] = ['date', 'name', 'city'];
  dataSource: MatTableDataSource<FrisbeeItem>;
  expandedElement: FrisbeeItem | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
    this.dataSource = new MatTableDataSource(FRISBEE_TOURNEYS);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

export interface FrisbeeItem {
  name: string;
  date: string;
  city: string;
  location: string;
  team: string;
  host: string;
  seeded: number;
  placed: number;
  usau: string;
  notes: string;
}

const FRISBEE_TOURNEYS: FrisbeeItem[] = [
  {
    name: 'Smoky Mountain Invite',
    date: '3/5/2020 - 3/9/2020',
    city: 'Knoxville, TN',
    location: "UT RecSports Field",
    team: 'UTD Woof',
    host: 'Univeristy of Tennesee',
    seeded: 15,
    placed: 8,
    usau: '',
    notes: ''
  },
  {
    name: 'Florida Warm-Up',
    date: '2/14/2020 - 2/16/2020',
    city: 'Tampa, FL',
    location: "USF Fields",
    team: 'UTD Woof',
    host: 'USF',
    seeded: 0,
    placed: 14,
    usau: '',
    notes: ''
  },
  {
    name: 'First Night of Flight',
    date: '12/27/2019 - 12/28/2019',
    city: 'Pittsburgh, PA',
    location: "Cool Springs Sports Complex",
    team: 'Scott\'s Tots',
    host: 'Pittsburgh Ultimate',
    seeded: 0,
    placed: 0,
    usau: '',
    notes: ''
  }
];