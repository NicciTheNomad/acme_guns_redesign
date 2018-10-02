import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  Params,
  PRIMARY_OUTLET
} from '@angular/router';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';

// create an interface to type Breadcrumbs
interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-stock-breadcrumbs',
  templateUrl: './stock-breadcrumbs.component.html',
  styleUrls: ['./stock-breadcrumbs.component.css']
})
export class StockBreadcrumbsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {}
}
