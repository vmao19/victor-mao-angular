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
      image: '../../../assets/project-images/raspberry-pi-scaled.jpg',
      tech: ['Angular', 'HTML', 'CSS', 'Raspberry Pi']
    },
    {
      title: 'State Farm - Drivelytics 2.0',
      subtitle: 'Spring 2019, 16 Weeks',
      description: '',
      image: '../../../assets/project-images/capstone-scaled.jpg',
      tech: ['Swift']
    },
    {
      title: 'Android Contact Manager',
      subtitle: '2018',
      description: '',
      image: '../../../assets/project-images/contact-manager-scaled.jpg',
      tech: ['Android', 'Java']
    },
    {
      title: 'Personal Website v1',
      subtitle: 'Aug 2019',
      description: '',
      image: '../../../assets/project-images/personal-website-scaled.jpg',
      tech: ['HTML', 'CSS', 'Raspberry Pi']
    },
    {
      title: 'Stroopsanity',
      subtitle: 'Oct 2015 - Feb 2016',
      description: '',
      image: '../../../assets/project-images/stroopsanity-scaled.jpg',
      tech: ['C#', 'Unity']
    },
    {
      title: 'Boggle',
      subtitle: '2012',
      description: '',
      image: '../../../assets/project-images/boggle-scaled.jpg',
      tech: ['VB.NET']
    },
    {
      title: 'Hangmaster Dynasty',
      subtitle: '2012',
      description: '**TEST** TEST *TEST*',
      image: '../../../assets/project-images/hangman-scaled.jpg',
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
