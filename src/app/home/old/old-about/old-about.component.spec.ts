import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldAboutComponent } from './old-about.component';

describe('OldAboutComponent', () => {
  let component: OldAboutComponent;
  let fixture: ComponentFixture<OldAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
