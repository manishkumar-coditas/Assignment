import { Component, OnInit } from '@angular/core';
import { PizzasService } from 'app/service/pizzas.service';
import { OrderService } from 'app/service/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

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
    this.pizzaList = this.pizzaService.getPizzasList();
  }

  selectedPizza(e) {
    this.orderDetails = e;
    this.showUserDetails = true;
  }

  getTabName() {
    return 'HOME';
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
