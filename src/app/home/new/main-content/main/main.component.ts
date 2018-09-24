import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { company } from '@app/data/company-data';
import { IImage } from 'ng-simple-slideshow';
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

  imageUrls: (string | IImage)[] = [
    {
      url: '/assets/images/riflecomm.jpg',
      href: 'https://5b905f7b3ef10a001445d02e.mockapi.io/guns/${gun.id}',
      caption: 'Gun Manufacturer - Model',
      backgroundPosition: 'center',
      backgroundSize: 'contain'
    }
  ];
  height = '250px';
  showArrows = true;
  arrowSize = '30px';
  disableSwiping = false;
  autoPlay = true;
  autoPlayInterval = 4000;
  stopAutoPlayOnSlide = true;
  debug = false;
  backgroundSize = 'cover';
  backgroundPosition = 'center';
  backgroundRepeat = 'no-repeat';
  showCaptions = true;
  captionColor = '#28303e';
  captionBackground = 'transparent';
  lazyLoad = false;
  width = '100%';

  constructor(private gundata: GunsService) {}

  ngOnInit() {
    this.gundata.getGuns().subscribe(guns => {
      this.imageUrls = this.randomGuns(guns).map(gun => {
        return {
          url: gun.imageURL[0],
          caption: `${gun.manufacturer} - ${gun.model}`,
          href: `https://5b905f7b3ef10a001445d02e.mockapi.io/guns/${gun.id}`,
          backgroundSize: 'contain',
          backgroundPosition: 'center'
        };
      });
    });
  }

  // helper function for randomization of gun slides
  randomGuns(guns: Gun[]) {
    // temporary function to remove fake data
    const tempGuns = [];
    for (let i = 0; i < guns.length; i++) {
      if (guns[i].imageURL[0].indexOf('/assets') > -1) {
        tempGuns.push(guns[i]);
      }
    }
    // confirm db result >= 6
    const gunSlides: Gun[] = [];
    let idx = 0;
    while (gunSlides.length < 6) {
      const temp =
        tempGuns[Math.floor(Math.random() * tempGuns.length - 1) + 1];
      if (!gunSlides.includes(temp)) {
        gunSlides.push(temp);
        idx++;
      }
    }
    return gunSlides;
  }
}
