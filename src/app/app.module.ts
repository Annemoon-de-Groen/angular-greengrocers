import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreRouteComponent } from './store-route/store-route.component';
import { CartRouteComponent } from './cart-route/cart-route.component';

const routes: Routes = [
  { path: 'store', component: StoreRouteComponent },
  { path: 'cart', component: CartRouteComponent },
  { path: '', redirectTo: '/store', pathMatch: 'full' }
]

@NgModule({
  declarations: [AppComponent, StoreComponent, CartComponent, TotalComponent, StoreRouteComponent, CartRouteComponent],
  imports: [BrowserModule, CommonModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
