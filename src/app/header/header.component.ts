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
  message: string;
  constructor(private router: Router) { 
    if(window.location.href.indexOf('offers')>0) {
      this.isOffer = true;
      this.message = 'YOUR OFFER(s)';
    } else if(window.location.href.indexOf('orders')>0) {
      this.isOrder = true;
      this.message = 'YOUR ORDER(s)';
    } else {
      this.isHome = true;
      this.message = 'SELECT YOUR ORDER(s)';
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
          this.router.navigate(['home']);
          this.message = 'SELECT YOUR ORDER(s)';
      break;
      case 'ORDER':
          this.isOrder = true;
          this.router.navigate(['orders']);
          this.message = 'YOUR ORDER(s)';
      break;
      case 'OFFER':
          this.isOffer = true;
          this.router.navigate(['offers']);
          this.message = 'YOUR OFFER(s)';
      break;
    }
  }
}
