import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactMeComponent } from './contact-me.component';

@NgModule({
  declarations: [
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
        [{ path: '', component: ContactMeComponent }]
      )
  ]
})
export class ContactMeModule { }
