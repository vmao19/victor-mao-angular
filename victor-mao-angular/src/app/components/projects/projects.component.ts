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
      date: 'June 2021',
      description: '',
      image: '',
      tech: ['Angular', 'HTML', 'CSS']
    },
    {
      title: 'Drivelytics 2.0',
      date: 'Spring 2019, 16 Weeks',
      description: '',
      image: '',
      tech: ['Swift']
    },
    {
      title: 'Android Contact Manager',
      date: '',
      description: '',
      image: '',
      tech: ['Android', 'Java']
    },
    {
      title: 'Personal Website v1',
      date: '',
      description: '',
      image: '',
      tech: ['HTML', 'CSS']
    },
    {
      title: 'Stroopsanity',
      date: '',
      description: '',
      image: '',
      tech: ['C#', 'Unity']
    },
    {
      title: 'Boggle',
      date: '',
      description: '',
      image: '',
      tech: ['VB.NET']
    },
    {
      title: 'Hangmaster Dynasty',
      date: '',
      description: '',
      image: '',
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
