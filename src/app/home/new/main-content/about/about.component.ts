import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  currentYear: number;
  companyAge: number;

  constructor() {}

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    this.companyAge = this.currentYear - 1929;
    console.log(this.companyAge);
  }
}
