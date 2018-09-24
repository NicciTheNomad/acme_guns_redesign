import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  path: string;
  toggle: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {}

  getPath() {
    console.log(this.router.url);
    const res = this.router.url.split('/');
    console.log(res);
    res[1] === 'old' ? (this.toggle = 'new') : (this.toggle = 'old');
    res.length <= 2
      ? (this.path = `/${this.toggle}`)
      : (this.path = `/${this.toggle}/${res[2]}`);
    this.router.navigateByUrl(this.path);
  }
}
