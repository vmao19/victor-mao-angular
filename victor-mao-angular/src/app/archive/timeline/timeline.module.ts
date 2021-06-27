import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzdIconComponent } from './icon/icon.component';
import {
  MzdTimelineContentComponent
} from './timeline-content/timeline-content.component';
import { MzdTimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [MzdTimelineComponent, MzdTimelineContentComponent, MzdIconComponent],
  imports: [ CommonModule ],
  exports: [MzdTimelineComponent, MzdTimelineContentComponent, MzdIconComponent]
})
export class MzdTimelineModule { }
