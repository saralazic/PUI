import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  prod: Product;
  order: number;
  user: User;
  msg: string;

  constructor(private srv: ProductsService, private usrv: UserService, private router: Router) { }

  ngOnInit(): void {
    let id : number = JSON.parse(localStorage.getItem('toShow'));
    this.prod = this.srv.getProdById(id);
    this.user = this.usrv.getlogged();
    console.log(this.user);
  }



  addToCart() {
    if (this.order <= 0) this.msg = "Unos nije korektan!";
    else {
      this.msg = "";
      let ind: number;
      ind = 0;
      this.user.cart.forEach(c => {
        if (c.prod.id == this.prod.id) {
          c.quantity += this.order;
          ind++;
        }
      });
      if (ind == 0) {
        this.user.cart.push({ prod: this.prod, quantity: this.order });
      } 
      this.usrv.editUser(this.user);
      this.router.navigate(['buyer/preview']);
    }
  }

}
