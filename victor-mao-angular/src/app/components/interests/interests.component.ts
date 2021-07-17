import { Component, OnInit } from '@angular/core';
import { InterestItem } from '../../models/interest-item';
import { MatDialog } from '@angular/material/dialog';
import { InterestDialogComponent } from './interest-dialog/interest-dialog.component';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interests: InterestItem[] = [
    {
      title: 'Ultimate Frisbee',
      subtitle: '2012 - Present',
      description: '../../../assets/interests/markdown/ultimate-frisbee.md',
      image: '../../../assets/interests/images/frisbee-scaled.jpg',
      alt: 'Photo of me catching a frisbee.'
    },
    {
      title: 'Billboard Top 100',
      subtitle: 'Jul 2014 - Dec 2017',
      description: '../../../assets/interests/markdown/billboard.md',
      image: '../../../assets/interests/images/billboard-scaled.jpg',
      alt: 'Stock photo of a music concert.'
    },
    {
      title: 'Eagle Scout',
      subtitle: '14 Nov 2013',
      description: '../../../assets/interests/markdown/eagle-scout.md',
      image: '../../../assets/interests/images/eagle-scout-scaled.jpg',
      alt: 'Stock photo of an Eagle Scout pin.'
    },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(i: InterestItem) {
    this.dialog.open(InterestDialogComponent, {
      data: {
        interest: i
      }
    });
  }

}
