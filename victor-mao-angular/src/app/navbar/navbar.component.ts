import { Component, OnInit } from '@angular/core';
import { TabItem } from '../models/tab-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tabs: TabItem[] = [
    {
      label: "Work",
      route: 'work'
    },
    {
      label: 'Home',
      route: 'home'
    },
    {
      label: "Play",
      route: 'play'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
