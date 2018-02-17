import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor() { }

  saveOrder(data) {
    let orders = [];
    orders = this.getAllOrders() ?  this.getAllOrders(): [];
    orders.push(data);
    window.localStorage.setItem('orders', JSON.stringify(orders));
  }

  getAllOrders() {
    return JSON.parse(window.localStorage.getItem('orders'));
  }

  cancelOrder(index) {
    let orders = this.getAllOrders();
    orders.splice(index, 1);
    window.localStorage.setItem('orders', JSON.stringify(orders));
  }
}
