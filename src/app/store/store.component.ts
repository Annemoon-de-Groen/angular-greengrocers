import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { Item } from '../models/item';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  constructor(private readonly storeService: StoreService) {
  }
  items = this.storeService.store

  getImage(id: string): string {
    return `assets/icons/${id}.svg`
  }
  addToCart(item: Item) {
    this.storeService.addItemToCart(item)
  }
}
