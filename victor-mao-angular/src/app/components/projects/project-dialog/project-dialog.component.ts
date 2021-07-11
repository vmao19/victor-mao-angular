import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectItem } from 'src/app/models/project-item';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {

  public description: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { project: ProjectItem }, public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.data.project.description, {responseType: 'text'})
    .subscribe(md => {
      this.description = md;
    })
  }

}
