import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/buyers/cart/cart.component';
import { DetailsComponent } from './components/buyers/details/details.component';
import { EditdataComponent } from './components/basic/editdata/editdata.component';
import { EmptyComponent } from './components/basic/empty/empty.component';
import { LoginComponent } from './components/basic/login/login.component';
import { LogoutComponent } from './components/basic/logout/logout.component';
import { NewproductComponent } from './components/sellers/newproduct/newproduct.component';
import { ProductsComponent } from './components/buyers/products/products.component';
import { SellprodComponent } from './components/sellers/sellprod/sellprod.component';
import { BuyerComponent } from './components/users/buyer/buyer.component';
import { SellerComponent } from './components/users/seller/seller.component';
import { NotificationsComponent } from './components/buyers/notifications/notifications.component';
import { OrdersComponent } from './components/sellers/orders/orders.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'login', component: LoginComponent },
  {
    path: 'buyer', component: BuyerComponent,
    children: [
      { path: 'preview', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'editdata', component: EditdataComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: '', component: EmptyComponent},
      { path: 'details', component: DetailsComponent }
    ]
  },
  {
    path: 'seller', component: SellerComponent,
    children: [
      { path: 'preview', component: SellprodComponent },
      { path: '', component: EmptyComponent},
      { path: 'newproduct', component: NewproductComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'editdata', component: EditdataComponent },
      { path: 'orders', component: OrdersComponent },
        ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
