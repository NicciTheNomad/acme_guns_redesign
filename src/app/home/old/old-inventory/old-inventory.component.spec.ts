import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldInventoryComponent } from './old-inventory.component';

describe('OldInventoryComponent', () => {
  let component: OldInventoryComponent;
  let fixture: ComponentFixture<OldInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
