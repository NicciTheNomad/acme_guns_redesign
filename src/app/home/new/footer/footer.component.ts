import { Component, OnInit } from '@angular/core';

import { company } from '@app/data/company-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  company = company;

  constructor() {}

  ngOnInit() {}
}
