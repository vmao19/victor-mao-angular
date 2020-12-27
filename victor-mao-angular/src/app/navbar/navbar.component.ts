import { Component, OnInit } from '@angular/core';
import { TabItem } from '../models/tab-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  tabs: TabItem[] = [
    {
      label: 'Home',
      route: 'home'
    },
    {
      label: "Work",
      route: 'work'
    },
    {
      label: "Hobbies",
      route: 'hobbies'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
