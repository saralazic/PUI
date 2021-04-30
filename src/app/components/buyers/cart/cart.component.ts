import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user: User;
  sum: number;

  constructor(private usrv: UserService, private router: Router,
    private ordserv: OrderService) {

  }

  ngOnInit(): void {
    this.user = this.usrv.getlogged();
    this.sum = 0;
    this.user.cart.forEach(c => {
      this.sum += c.quantity * c.prod.price;
    });
  }

  calc() {
    this.sum = 0;
    this.user.cart.forEach(c => {
      this.sum += c.quantity * c.prod.price;
    });
  }

  outOfCart(i: number) {
    this.user.cart.splice(i, 1);
    this.usrv.editUser(this.user);
    this.calc();
    this.router.navigate(['buyer/cart']);
  }

  setOrder() {
    let cart: { prod: Product, quantity: number }[] ;
    cart = this.user.cart;
    this.user.cart = [];
    this.ordserv.addOrder({ buyer: this.user, orders: cart });
    this.usrv.editUser(this.user);
  }
}
