import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private pserv: ProductsService, private router: Router) { }

  products: Product[];
  prod: {first: Product, second: Product}[];
  prod1: Product[];
  prod2: Product[];

  ngOnInit(): void {
    this.prod = [];
    this.prod1 = this.prod2 = [];
    this.products = this.pserv.getProducts();

    this.prod1 = this.products.filter(el => (el.id%2)==0);
    this.prod2 = this.products.filter(el => (el.id%2)==1);

    for(let i=0; i<this.prod2.length; i++){
        this.prod.push({first:this.prod1[i], second:this.prod2[i]});
    }

    if (this.prod1.length>this.prod2.length){
      this.prod.push({first:this.prod1[this.prod1.length-1], second: null});

    }
    console.log(this.prod1);
    console.log(this.prod2);
  }

  showDetails(id:number){
    localStorage.setItem('toShow', JSON.stringify(id));
    console.log('pozvan na klik');
    this.router.navigate(['buyer/details']);
  }


}
