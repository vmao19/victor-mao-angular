import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { MzdTimelineModule } from '../timeline/timeline.module';

import { WorkComponent } from './work.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    WorkComponent,
    ProjectsComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MzdTimelineModule,
    RouterModule.forChild(
      [
        { path: '', component: WorkComponent }
      ]
    )
  ]
})
export class WorkModule { }
