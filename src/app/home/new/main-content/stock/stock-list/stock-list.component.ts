import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Gun } from '@app/models';
import { GunsService } from '@app/services';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  guns: Gun[];

  constructor(private gundata: GunsService, private router: Router) {}

  ngOnInit() {
    this.gundata.getGuns().subscribe(guns => {
      this.guns = guns;
      console.log(this.guns[0].imageURL[0]);
    });
  }

  getDetails(gunID) {
    console.log(`I want to view ${gunID}`);
    this.router.navigateByUrl(`/new/inventory/${gunID}`);
  }
}
