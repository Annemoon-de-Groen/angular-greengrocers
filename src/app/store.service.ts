import { Injectable } from '@angular/core';
import { CartItem, Item } from './models/item';
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private itemList: Item[] = [];
  cart: CartItem[] = []
  totalPrice = { price: 0 }

  constructor(private readonly http: HttpClient) {
  }

  store: Promise<Item[]> = Promise.resolve(this.loadItems());

  async loadItems() {
    return this.itemList = await firstValueFrom(
      this.http.get<Item[]>('https://boolean-api-server.fly.dev/groceries')
    )
  }

  addItemToCart(item: Item) {
    //Als item al bestaat voeg 1 toe aan de quantity
    let itemIndex: number = this.cart.findIndex((x) => x.item === item)

    if (itemIndex === -1) {
      //Anders voeg item toe
      const newItem: CartItem = {
        item: item,
        quantity: 1
      }
      this.cart.push(newItem)
    }
    else {
      this.cart[itemIndex].quantity++
    }
    this.calculatePrice()
  }
  removeItemFromCart(item: Item) {
    let itemIndex: number = this.cart.findIndex((x) => x.item === item)
    this.cart[itemIndex].quantity--
    //Als quantity 0 is, verwijder item van cart
    if (this.cart[itemIndex].quantity <= 0) {
      this.cart.splice(itemIndex, 1)
    }
    this.calculatePrice()
  }

  private calculatePrice() {
    let result = 0;
    this.cart.forEach(x => { result += (x.quantity * x.item.price) })
    this.totalPrice.price = result;
  }


}
