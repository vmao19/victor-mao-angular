import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InterestItem } from 'src/app/models/interest-item';

@Component({
  selector: 'app-interest-dialog',
  templateUrl: './interest-dialog.component.html',
  styleUrls: ['./interest-dialog.component.css']
})
export class InterestDialogComponent implements OnInit {
  
  public description: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { interest: InterestItem }, public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.data.interest.description, {responseType: 'text'})
    .subscribe(md => {
      this.description = md;
    })
  }

}
