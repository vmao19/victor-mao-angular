import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayComponent } from './play.component';

@NgModule({
  declarations: [
    PlayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
        [{ path: '', component: PlayComponent }]
      )
  ]
})
export class PlayModule { }
