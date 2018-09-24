import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldHandgunsComponent } from './old-handguns.component';

describe('OldHandgunsComponent', () => {
  let component: OldHandgunsComponent;
  let fixture: ComponentFixture<OldHandgunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldHandgunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldHandgunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
