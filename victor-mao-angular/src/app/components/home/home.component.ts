import { Component, OnInit } from '@angular/core';
import { SocialMediaItem } from '../../models/social-media-item';
import {trigger, style, animate, transition, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [ 
      transition(':enter', [
          style({ opacity: 0 }),
          animate('1000ms ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeStaggered', [ 
      transition(':enter', [
        query('*', [
          style({ opacity: 0 }),
          stagger('200ms', [
            animate('1000ms ease-in', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  socialMediaLinks: SocialMediaItem[] = [
    {
      name: 'Email',
      link: 'mailto@victormao98@gmail.com',
      icon: 'fas fa-envelope'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/victor-mao/',
      icon: 'fab fa-linkedin-in'
    },
    {
      name: 'GitHub',
      link: 'https://github.com/vmao19',
      icon: 'fab fa-github'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
