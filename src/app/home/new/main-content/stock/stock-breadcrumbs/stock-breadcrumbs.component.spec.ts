import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBreadcrumbsComponent } from './stock-breadcrumbs.component';

describe('StockBreadcrumbsComponent', () => {
  let component: StockBreadcrumbsComponent;
  let fixture: ComponentFixture<StockBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
