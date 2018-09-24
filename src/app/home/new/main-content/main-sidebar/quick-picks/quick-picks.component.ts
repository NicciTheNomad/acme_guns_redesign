import { Component, OnInit } from '@angular/core';

import { GunsService } from '@app/services/guns.service';
import { Gun } from '@app/models/guns';

@Component({
  selector: 'app-quick-picks',
  templateUrl: './quick-picks.component.html',
  styleUrls: ['./quick-picks.component.css']
})
export class QuickPicksComponent implements OnInit {
  pistols: Gun[] = [];
  constructor(private gundata: GunsService) {}

  ngOnInit() {}

  getOneGun(gun_id) {
    console.log(gun_id);
    this.gundata.getGun(gun_id).subscribe(gun => {
      console.log(gun);
    });
  }

  getPistols() {
    this.gundata.getPistols().subscribe(guns => {
      console.log(guns);
    });
  }
}
