import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

import { WorkComponent } from './work.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    WorkComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(
      [
        { path: '', component: WorkComponent }
      ]
    )
  ]
})
export class WorkModule { }
