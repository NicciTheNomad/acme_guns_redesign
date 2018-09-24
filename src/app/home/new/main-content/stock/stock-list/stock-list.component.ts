import { Component, OnInit, Input } from '@angular/core';
import { Gun } from '@app/models';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  @Input()
  guns: Gun[];

  constructor() {}

  ngOnInit() {}
}
