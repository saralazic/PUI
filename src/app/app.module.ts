import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/marginals/header/header.component';
import { FooterComponent } from './components/marginals/footer/footer.component';
import { LoginComponent } from './components/basic/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuyerComponent } from './components/users/buyer/buyer.component';
import { SellerComponent } from './components/users/seller/seller.component';

import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule }from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { ProductsComponent } from './components/buyers/products/products.component';
import { EditdataComponent } from './components/basic/editdata/editdata.component';
import { CartComponent } from './components/buyers/cart/cart.component';
import { NewproductComponent } from './components/sellers/newproduct/newproduct.component';
import { LogoutComponent } from './components/basic/logout/logout.component';
import { EmptyComponent } from './components/basic/empty/empty.component';
import { DetailsComponent } from './components/buyers/details/details.component';
import { SellprodComponent } from './components/sellers/sellprod/sellprod.component';
import { OrdersComponent } from './components/sellers/orders/orders.component';
import { NotificationsComponent } from './components/buyers/notifications/notifications.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BuyerComponent,
    SellerComponent,
    ProductsComponent,
    EditdataComponent,
    CartComponent,
    NewproductComponent,
    LogoutComponent,
    EmptyComponent,
    DetailsComponent,
    SellprodComponent,
    OrdersComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
