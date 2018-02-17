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
  constructor(private pizzaService: PizzasService, private orderService:OrderService) {
    this.getList();
   }

  ngOnInit() {
  }

  getList() {
    this.pizzaList = this.pizzaService.getOfferPizzasList();
    console.log('list : ', this.pizzaList);
  }

  selectedPizza(e) {
    console.log(e);
    this.orderService.saveOrder(e);
  }
}