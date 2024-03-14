import { Component } from '@angular/core';
import { CartItem, Item } from '../models/item';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private readonly storeService: StoreService) {
  }
  cart: CartItem[] = this.storeService.cart
  getImage(id: string): string {
    return `assets/icons/${id}.svg`
  }

  increase(item: Item) {
    this.storeService.addItemToCart(item)
  }
  decrease(item: Item) {
    this.storeService.removeItemFromCart(item)
  }

}
