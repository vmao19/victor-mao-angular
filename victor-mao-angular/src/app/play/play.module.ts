import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

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
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forChild(
        [{ path: '', component: PlayComponent }]
      )
  ]
})
export class PlayModule { }
