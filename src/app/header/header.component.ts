import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isHome:boolean;
  isOffer: boolean;
  isOrder: boolean;
  constructor(private router: Router) { 
    if(this.router.url.indexOf('offers')>0) {
      this.isOffer = true;
    } else if(this.router.url.indexOf('orders')>0) {
      this.isOrder = true;
    } else {
      this.isHome = true;
    }
  }

  ngOnInit() {
  }

  headerButtonClicked(name) {
    this.isHome = false;
    this.isOrder = false;
    this.isOffer = false;
    switch(name) {
      case 'HOME':
          this.isHome = true;
      break;
      case 'ORDER':
          this.isOrder = true;
      break;
      case 'OFFER':
          this.isOffer = true;
      break;
    }
  }
}
