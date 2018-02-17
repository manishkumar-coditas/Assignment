import { Component, OnInit } from '@angular/core';
import { PizzasService } from 'app/service/pizzas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  pizzaList: any;
  constructor(private pizzaService: PizzasService) {
    this.getList();
   }

  ngOnInit() {
  }

  getList() {
    this.pizzaList = this.pizzaService.getPizzasList();
    console.log('list : ', this.pizzaList);
  }

  selectedPizza(e) {
    console.log(e);
  }
}
