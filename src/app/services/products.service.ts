import { Injectable } from '@angular/core';
import { PRODUCTS } from '../data/Products';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  initProducts(){
    if (localStorage.getItem('products') == null) {
      localStorage.setItem('products', JSON.stringify(PRODUCTS));
    }
  }

  getProducts() : Product[]{
    return JSON.parse(localStorage.getItem('products'));
  }

  setProducts(prod: Product[]){
    localStorage.setItem('products', JSON.stringify(prod));
  }

  addProduct(prod: Product): Product[]{
    let p: Product[];
    p = this.getProducts();
    prod.id = p.length;
    p.push(prod);
    this.setProducts(p);
    return p;
  }

  getProdById(id: number) : Product{
    console.log("Pozvana fja getProdById za id = "+id);
    let p = this.getProducts();
    if(id<0 || id>p.length) return null;
    else return p[id];
  }

  
}
