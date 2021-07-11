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
      description: '../../../assets/projects/markdown/personal-website-v2.md',
      image: '../../../assets/projects/images/raspberry-pi-scaled.jpg',
      alt: 'Stock photo of a Raspberry Pi computer.',
      tech: ['Angular', 'HTML', 'CSS', 'Raspberry Pi']
    },
    {
      title: 'State Farm - Drivelytics 2.0',
      subtitle: 'Spring 2019, 16 Weeks',
      description: '../../../assets/projects/markdown/capstone.md',
      image: '../../../assets/projects/images/capstone-scaled.jpg',
      alt: 'Stock photo of an iPhone in a car phone holder.',
      tech: ['Swift']
    },
    {
      title: 'Android Contact Manager',
      subtitle: '2018',
      description: '../../../assets/projects/markdown/contact-manager.md',
      image: '../../../assets/projects/images/contact-manager-scaled.jpg',
      alt: 'Stock photo hands holding an iPhone.',
      tech: ['Android', 'Java']
    },
    {
      title: 'Personal Website v1',
      subtitle: 'Aug 2019',
      description: '../../../assets/projects/markdown/personal-website-v1.md',
      image: '../../../assets/projects/images/personal-website-scaled.jpg',
      alt: 'Photo of my Personal Website v1 on a laptop screen.',
      tech: ['HTML', 'CSS', 'Raspberry Pi']
    },
    {
      title: 'Stroopsanity',
      subtitle: 'Oct 2015 - Feb 2016',
      description: '../../../assets/projects/markdown/stroopsanity.md',
      image: '../../../assets/projects/images/stroopsanity-scaled.jpg',
      alt: 'Stock photo of colored pencils.',
      tech: ['C#', 'Unity']
    },
    {
      title: 'Boggle',
      subtitle: '2012',
      description: '../../../assets/projects/markdown/boggle.md',
      image: '../../../assets/projects/images/boggle-scaled.jpg',
      alt: 'Stock photo of Boggle cubes.',
      tech: ['VB.NET']
    },
    {
      title: 'Hangmaster Dynasty',
      subtitle: '2012',
      description: '../../../assets/projects/markdown/hangman.md',
      image: '../../../assets/projects/images/hangman-scaled.jpg',
      alt: 'Stock photo of a Hangman game.',
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
