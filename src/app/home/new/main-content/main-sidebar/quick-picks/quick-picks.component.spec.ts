import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPicksComponent } from './quick-picks.component';

describe('QuickPicksComponent', () => {
  let component: QuickPicksComponent;
  let fixture: ComponentFixture<QuickPicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickPicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
