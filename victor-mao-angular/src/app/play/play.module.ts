import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

import { PlayComponent } from './play.component';
import { FrisbeeComponent } from './frisbee/frisbee.component';

@NgModule({
  declarations: [
    PlayComponent,
    FrisbeeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(
        [{ path: '', component: PlayComponent }]
      )
  ]
})
export class PlayModule { }
