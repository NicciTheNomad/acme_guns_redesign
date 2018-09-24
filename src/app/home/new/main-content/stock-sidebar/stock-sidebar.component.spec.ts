import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSidebarComponent } from './stock-sidebar.component';

describe('StockSidebarComponent', () => {
  let component: StockSidebarComponent;
  let fixture: ComponentFixture<StockSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
