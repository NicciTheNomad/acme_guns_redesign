import { Component, OnInit } from '@angular/core';

import { Gun } from '@app/models/guns';
import { GunsService } from '@app/services/guns.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  guns: Gun[] = [];

  constructor(private gundata: GunsService) {}

  ngOnInit() {
    // this.gundata.getGuns().subscribe(guns => {
    //   this.guns = guns;
    //   console.log(this.guns);
    // });
  }
}
