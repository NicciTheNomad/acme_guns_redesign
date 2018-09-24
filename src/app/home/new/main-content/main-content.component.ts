import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  sidebarLeft = false; // main sidebar, float right
  contentRight = false; // content, float left
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    console.log(this.router.url);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(res => {
        if (this.location.path() === '/inventory') {
          console.log('navigated to guns page');
          this.sidebarLeft = true;
          this.contentRight = true;
        } else {
          this.sidebarLeft = false;
          this.contentRight = false;
        }
        console.log(
          'sidebar left',
          this.sidebarLeft,
          'content right',
          this.contentRight
        );
      });
  }
}
