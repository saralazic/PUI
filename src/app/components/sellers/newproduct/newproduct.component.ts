import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PHOTOS } from 'src/app/data/Photos';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  prod: Product;
  photos: string[];
  msg: string;

  constructor(private srv: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.photos = PHOTOS;
    this.empty();
    /*   this.prod = {
         id: -1,
         name: "",
         photo: "assets/images/spoons-1.png",
         price: 0,
         description: "",
         usage: ""
       };*/
  }


  empty() {
    this.prod = {
      id: -1,
      name: "",
      photo: "",
      price: 0,
      description: "",
      usage: ""
    };
    this.msg = "";
  }

  addProduct() {
    if (this.prod.name == "" || this.prod.photo == ""
      || this.prod.price <= 0 || this.prod.description == ""
      || this.prod.usage == "") {
      this.msg = "Morate uneti sve podatke!";
    }
    else {
      this.srv.addProduct(this.prod);
      this.empty();
      this.router.navigate(['seller/preview']);
    }
  }

}
