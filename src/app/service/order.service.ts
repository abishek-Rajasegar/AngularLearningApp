import { Injectable } from '@angular/core';
import { OrderInterface } from '../interface/order.interface';
import { UserInterface } from '../interface/user.interface';
import { Cart } from '../interface/cart.interface';

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
