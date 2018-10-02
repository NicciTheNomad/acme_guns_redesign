import { Component, OnInit, Input } from '@angular/core';
import { Gun } from '@app/models';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  isActive = false;
  captionText: string;

  @Input()
  gun: Gun;

  constructor() {}

  ngOnInit() {}
}
