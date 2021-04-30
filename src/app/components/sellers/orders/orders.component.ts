import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { User } from 'src/app/models/User';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  date: Date;
  msg: string;

  constructor(private ordsrv: OrderService, private usrv: UserService) { }

  ngOnInit(): void {
    this.orders = this.ordsrv.getOrders();
  }

  reject(i: number) {
    this.orders.splice(i, 1);
    this.ordsrv.setOrders(this.orders);
  }

  
  accept(i: number) {
    if (this.date == null) {
      this.msg = "Nije unet datum isporuke";
    }
    else{
      let usr: User = this.orders[i].buyer;
      usr.notifications.push("Vaša porudžbina je odobrena. Prispeće paketa možete očekivati "+this.date);
      this.orders.splice(i, 1);
      this.ordsrv.setOrders(this.orders);
      this.usrv.editUser(usr);
    }
  }

}
