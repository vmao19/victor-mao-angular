import { Component, OnInit } from '@angular/core';
import { InterestItem } from '../../models/interest-item';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interests: InterestItem[] = [
    {
      title: 'Ultimate Frisbee',
      subtitle: '',
      description: '',
      image: '../../../assets/interests/images/frisbee-scaled.jpg'
    },
    {
      title: 'Billboard Top 100',
      subtitle: '',
      description: '',
      image: '../../../assets/interests/images/billboard-scaled.jpg'
    },
    {
      title: 'Eagle Scout',
      subtitle: '',
      description: '',
      image: '../../../assets/interests/images/eagle-scout-scaled.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
