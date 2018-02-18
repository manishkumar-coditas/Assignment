import { Component, OnInit } from '@angular/core';
import { PizzasService } from 'app/service/pizzas.service';
import { OrderService } from 'app/service/order.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.less']
})
export class OffersComponent implements OnInit {

  pizzaList: any;
  showUserDetails: boolean;
  orderDetails: any;
  constructor(private pizzaService: PizzasService, private orderService:OrderService) {
    this.getList();
    this.showUserDetails = false;
   }

  ngOnInit() {
  }

  getList() {
    this.pizzaList = this.pizzaService.getOfferPizzasList();
  }

  selectedPizza(e) {
    this.orderDetails = e;
    this.showUserDetails = true;
  }

  getTabName() {
    return 'OFFER';
  }
  saveOrderDetails(e) {
    if(e=== false) {
      this.showUserDetails = false;
    } else {
      if(confirm('Are you sure to order this item')) {
        this.orderDetails.userDetails = e;
        this.orderService.saveOrder(this.orderDetails);
        alert('Your order will be delivered in 1 hour'); 
        this.showUserDetails = false;
      };
    }
  }
}
