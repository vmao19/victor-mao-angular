import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HobbiesComponent } from './hobbies.component';

@NgModule({
  declarations: [
    HobbiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
        [{ path: '', component: HobbiesComponent }]
      )
  ]
})
export class HobbiesModule { }
