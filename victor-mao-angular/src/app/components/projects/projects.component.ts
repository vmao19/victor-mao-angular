import { Component, OnInit } from '@angular/core';
import { ProjectItem } from '../../models/project-item';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectItem[] = [
    {
      title: 'Personal Website v2',
      subtitle: 'June 2021',
      description: '',
      image: '../../../assets/projects/images/raspberry-pi-scaled.jpg',
      tech: ['Angular', 'HTML', 'CSS', 'Raspberry Pi']
    },
    {
      title: 'State Farm - Drivelytics 2.0',
      subtitle: 'Spring 2019, 16 Weeks',
      description: `
# Goal #
The goal of our senior design project was to augment the existing beaconless solution (Drivelytics 1.0) and implement **application enhancements** and an **improved scoring algorithm** to produce a more accurate and nuanced representation and rating of the driver’s performance and to create an all in one mobile application for State Farm insured drivers.

# Impact #
* Encourage safer driving habits
* Improved scoring accuracy
* Provide useful feedback to drivers
* Increase customer usage and experience
* Increase customer retention and enrollment

# Summary #
Throughout the course of the Spring 2019 capstone project, our team researched and implemented enhanced functionalities to the existing Drivelytics mobile application. The three primary enhancements accomplished by our team were speeding, traffic, and construction. These enhancements improve the existing implementation of the driver scoring algorithm by increasing robustness through the addition of new metrics. Additionally, our team implemented push notification support for before and after trips to notify users of drive scores, billing cycles, and emergency weather alerts. Lastly, we added a toggleable option to allow users to customize which additional metrics would influence the calculation of their drive scores. In conclusion, our team was able to improve multiple aspects of the previous semester’s Drivelytics mobile application, such as algorithm design, external data usage, user experience, and application robustness.
`,
      image: '../../../assets/projects/images/capstone-scaled.jpg',
      tech: ['Swift']
    },
    {
      title: 'Android Contact Manager',
      subtitle: '2018',
      description: '',
      image: '../../../assets/projects/images/contact-manager-scaled.jpg',
      tech: ['Android', 'Java']
    },
    {
      title: 'Personal Website v1',
      subtitle: 'Aug 2019',
      description: '',
      image: '../../../assets/projects/images/personal-website-scaled.jpg',
      tech: ['HTML', 'CSS', 'Raspberry Pi']
    },
    {
      title: 'Stroopsanity',
      subtitle: 'Oct 2015 - Feb 2016',
      description: '',
      image: '../../../assets/projects/images/stroopsanity-scaled.jpg',
      tech: ['C#', 'Unity']
    },
    {
      title: 'Boggle',
      subtitle: '2012',
      description: '',
      image: '../../../assets/projects/images/boggle-scaled.jpg',
      tech: ['VB.NET']
    },
    {
      title: 'Hangmaster Dynasty',
      subtitle: '2012',
      description: '**TEST** TEST *TEST*',
      image: '../../../assets/projects/images/hangman-scaled.jpg',
      tech: ['VB.NET']
    },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(p: ProjectItem) {
    this.dialog.open(ProjectDialogComponent, {
      data: {
        project: p
      }
    });
  }

}
