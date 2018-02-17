import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less']
})
export class OrdersComponent implements OnInit {

  orderList: any;
  constructor(private orderService: OrderService) {
    this.orderList = null;
   }

  ngOnInit() {
    this.getorderList();
  }

  getorderList() {
    this.orderList = this.orderService.getAllOrders();
    console.log(this.orderList);
  }

  cancelOrder(i) {
    this.orderService.cancelOrder(i);
    this.getorderList();
  }
}
