import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {

  @Output() orderDetails = new EventEmitter();
  userDetails: any;
  constructor() {
   }

  ngOnInit() {
    this.userDetails = {
      name: '',
      email: '',
      contact: '',
      address: ''
    }
  }

  orderPizza(){
    this.orderDetails.emit(this.userDetails);
  }
  
  cancel(){
    this.orderDetails.emit(false);
  }
}
