import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldLonggunsComponent } from './old-longguns.component';

describe('OldLonggunsComponent', () => {
  let component: OldLonggunsComponent;
  let fixture: ComponentFixture<OldLonggunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldLonggunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldLonggunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
