import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  initOrders() : void {
    if (localStorage.getItem('orders') == null) {
      localStorage.setItem('orders', JSON.stringify([]));
    }
  }

  getOrders(): Order[] {
    let ord: Order[] = [];
    ord = JSON.parse(localStorage.getItem('orders'));
    return ord;
  }

  setOrders(ord: Order[]) : void {
    localStorage.setItem('orders', JSON.stringify(ord));
  }

  addOrder(ord: Order) : void {
    let o: Order[];
    o = this.getOrders();
    o.push(ord);
    this.setOrders(o);
  }

  acceptOrders() {

  }
}
