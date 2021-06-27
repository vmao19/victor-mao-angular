import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrisbeeComponent } from './frisbee.component';

describe('FrisbeeComponent', () => {
  let component: FrisbeeComponent;
  let fixture: ComponentFixture<FrisbeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrisbeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrisbeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
