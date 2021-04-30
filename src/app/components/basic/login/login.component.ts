import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  mess: string;

  constructor(private userserv: UserService, private productserv: ProductsService, private ordserv: OrderService) { 

  }

  ngOnInit(): void {
    this.userserv.initUsers();
    this.productserv.initProducts();
    this.ordserv.initOrders();
  }

  login(){
   // alert("login pozvan");
    this.mess = this.userserv.login(this.username, this.password);
  }

}
