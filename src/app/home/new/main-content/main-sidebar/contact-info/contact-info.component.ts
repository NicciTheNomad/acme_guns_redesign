import { Component, OnInit, Input } from '@angular/core';

import { company } from '@app/data/company-data';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  contactUs = company;

  constructor() {}

  ngOnInit() {}
}
