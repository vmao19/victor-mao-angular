import { Component, OnInit } from '@angular/core';
import { TabItem } from '../models/tab-item';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass']
})
export class WorkComponent implements OnInit {

  tabs: TabItem[] = [
    {
      label: 'Experience',
      route: 'experience'
    },
    {
      label: "Projects",
      route: 'projects'
    },
    {
      label: "Education",
      route: 'education'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
