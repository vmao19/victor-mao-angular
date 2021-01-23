import { Component, OnInit } from '@angular/core';
import { ProjectItem } from '../../models/project-item';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectItem[] = [
    {
      title: 'Personal Website v2',
      subtitle: '',
      description: '',
      background: '',
      date: '',
      tech: ['Angular', 'HTML', 'CSS']
    },
    {
      title: 'Drivelytics 2.0',
      subtitle: '',
      description: '',
      background: '',
      date: '',
      tech: ['Swift']
    },
    {
      title: 'Android Contact Manager',
      subtitle: '',
      description: '',
      background: '',
      date: '',
      tech: ['Android', 'Java']
    },
    {
      title: 'Personal Website v1',
      subtitle: '',
      description: '',
      background: '',
      date: '',
      tech: ['HTML', 'CSS']
    },
    {
      title: 'Stroopsanity',
      subtitle: '',
      description: '',
      background: '',
      date: '',
      tech: ['C#', 'Unity']
    },
    {
      title: 'Boggle',
      subtitle: '',
      description: '',
      background: '',
      date: '',
      tech: ['VB.NET']
    },
    {
      title: 'Hangmaster Dynasty',
      subtitle: '',
      description: '',
      background: '',
      date: '',
      tech: ['VB.NET']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
