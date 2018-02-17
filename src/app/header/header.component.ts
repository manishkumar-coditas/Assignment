import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isHome:boolean;
  isOffer: boolean;
  isOrder: boolean;
  constructor() { 
    this.isHome = true;
    this.isOrder = false;
    this.isOffer = false;
  }

  ngOnInit() {
  }

}
