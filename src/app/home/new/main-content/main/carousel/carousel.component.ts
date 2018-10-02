import {
  Component,
  OnInit,
  Input,
  AfterContentInit,
  ContentChildren,
  QueryList
} from '@angular/core';
import { CarouselItemComponent } from '@app/home/new/main-content/main/carousel-item/carousel-item.component';
import { Gun } from '@app/models';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterContentInit {
  @ContentChildren(CarouselItemComponent)
  carouselItemsList: QueryList<CarouselItemComponent>;
  slideIndex = 0;

  @Input()
  delay: 3000;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    const carouselItems = this.carouselItemsList.toArray();
    console.log('carousel.component carouselItems', carouselItems);
    // let count = 0;
    const max = carouselItems.length;
    setInterval(() => {
      const i = this.slideIndex % max;
      carouselItems.forEach(item => (item.isActive = false));
      carouselItems[i].isActive = true;
      this.slideIndex += 1;
    }, this.delay);
  }
}
