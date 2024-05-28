import { Injectable } from '@angular/core';
import { OrderInterface } from './order-interface';
import { UserInterface } from './user-interface';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: any[] = [];
  orderCount = 0;
  constructor() { }

  createOrder(user: UserInterface, product: Cart) {
    let customerOrder: any = {};
    customerOrder.id = this.orderCount++;
    customerOrder.users = user;
    customerOrder.productOrdered = product
    this.orders.push(customerOrder)
    console.log(this.orders);

  }
}
