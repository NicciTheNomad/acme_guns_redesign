import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { company } from '@app/data/company-data';
import { GunsService } from '@app/services/guns.service';
import { Gun } from '@app/models/guns';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  company = company;
  specialAnnouncement =
    'We are currently closed due to Hurricane Florence. We hope to reopen soon!';
  guns: Gun[];
  slideIndex = 0;
  constructor(private gundata: GunsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.guns = this.route.snapshot.data.guns as Gun[];
    this.guns = this.randomGuns(this.guns);
  }

  // helper function for randomization of gun slides
  randomGuns(guns: Gun[]) {
    // only select guns with images
    const gunImages = [];
    for (let i = 0; i < guns.length; i++) {
      if (guns[i].imageURL[0] && guns[i].imageURL[0].indexOf('assets') > 0) {
        console.log('found a gun with an image', guns[i].imageURL[0]);
        gunImages.push(guns[i]);
      }
    }
    // confirm db result >= 6

    // select random images to display
    const gunSlides: Gun[] = [];
    let idx = 0;
    while (gunSlides.length < 6) {
      const temp =
        gunImages[Math.floor(Math.random() * gunImages.length - 1) + 1];
      if (!gunSlides.includes(temp)) {
        gunSlides.push(temp);
        idx++;
      }
    }
    return gunSlides;
  }

  viewGun(gunID) {
    console.log(`I want to view gun ${gunID}`);
  }
}
